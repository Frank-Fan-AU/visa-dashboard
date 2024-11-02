"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Table, Pagination, Button, Space, Tooltip } from "antd";
import type { TableColumnsType, TableProps,GetProp } from 'antd';
import type { SorterResult } from 'antd/es/table/interface';
import { Record } from "@/type/Record";
import qs from 'qs';
import { DetailModal } from "./detailModal";
import EditModal from "./editModal";

type TablePaginationConfig = Exclude<GetProp<TableProps, 'pagination'>, boolean>;

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: SorterResult<any>['field'];
  sortOrder?: SorterResult<any>['order'];
  filters?: Parameters<GetProp<TableProps, 'onChange'>>[1];
}


const TablePage = () => {

  const [data, setData] = useState<Record[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<Record | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);


  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 50,
    },
  });

  const { user } = useUser();
  const isAdmin = user?.organizationMemberships[0]?.role === "org:admin";

  const fetchData = () => {
    setLoading(true);
    const queryString = qs.stringify(tableParams, { encode: true, indices: false });
    fetch(`/api/visaTable?${queryString}`)
    .then((res) => res.json())
    .then(({data,totalRecords})=>{
      setData(data)
      setLoading(false)
     // 使用函数式更新
     setTableParams((prevParams) => ({
      ...prevParams,
      pagination: {
        ...prevParams.pagination,
        total: totalRecords,
      },
    }));
    })
    .catch((error) => {
      setLoading(false); // 确保在出错时停止加载
      console.error('Fetch error:', error);
    });
  };

  useEffect(fetchData, [
    tableParams.pagination?.current,
    tableParams.pagination?.pageSize,
    tableParams.sortOrder,
    tableParams.sortField,
    JSON.stringify(tableParams.filters),
  ]);

  const handleTableChange= (pagination:any, filters:any, sorter:any) => {
    // 保留之前的 pagination 值，合并新的 pagination 值
  const updatedPagination = {
    ...tableParams.pagination, // 保留之前的 pagination 值
    ...pagination, // 用新的 pagination 值覆盖之前的值
  };
console.log('filters',filters)

    setTableParams({
      pagination: updatedPagination,
      filters,
      sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      sortField: Array.isArray(sorter) ? undefined : sorter.field,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const handleDetail = (record: Record) => {
    setSelectedRecord(record);
    setIsDetailModalOpen(true);
  };

  const handleEditBtnClick = (record: Record) =>{
    setSelectedRecord(record);
    console.log('record',record)
    setIsEditModalOpen(true)
  }

  const handleCloseEditModal = ()=>{
    setIsEditModalOpen(false)
  }

  const handleEdit = async (formData: Record) => {
    try {
      const response = await fetch('/api/admin', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`更新失败: ${response.statusText}`);
      }
      
      fetchData();
      setIsEditModalOpen(false)
    } catch (error) {
      console.error('更新失败:', error);
    }
  }

  const deleteRecord = async (id: string) => {
    // 在这里实现删除行的逻辑
    const response = await fetch(`/api/admin?id=${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Document deleted successfully:', data);
    } else {
      console.error('Error deleting document:', data);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteRecord(id); // 调用删除 API
    fetchData();
  };

  const columns: TableColumnsType<Record> = [

    {
      title: '递签日期',
      dataIndex: 'submitTime',
      sorter: true, // 这里启用排序
      width:130
    },
    {
      title: '下签日期',
      dataIndex: 'getVisaTime',
      sorter: true, // 这里启用排序
      defaultSortOrder:'descend',
      width:130
    },
    {
      title: '签证处理时间',
      dataIndex: 'handleTime',
      render: (_, record) => {
        const submitTime = record.submitTime;
        const getVisaTime = record.getVisaTime;
        const calculateDaysBetween = (start: string, end: string) => {
          if (!start || !end) return "未计算"; // 如果没有日期，返回提示信息
          const startDate = new Date(start);
          const endDate = new Date(end);
        
          // 计算相差的天数
          const diffTime = endDate.getTime() - startDate.getTime();
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 转换为天数
          return diffDays >= 0 ? `${diffDays} 天` : "未下签";
        };
        return (calculateDaysBetween(submitTime, getVisaTime))
      },
      width:120
    },
    {
      title: '签证官',
      dataIndex: 'visaOfficer',
      width:120
    },
    {
      title: '本硕博',
      dataIndex: 'educationLevel',
      width:100,
      filters: [
        { text: '本科', value: '本科' },
        { text: '硕士', value: '硕士' },
        { text: '博士', value: '博士' },
        { text: 'MPhil', value: 'MPhil' },
      ],
    },
    {
      title: '专业',
      dataIndex: 'major',
    },
    {
      title: '递签地点',
      dataIndex: 'submitPlace',
      width:120
    },
    {
      title: '是否含陪读',
      dataIndex: 'ifIncludedCouple',
      width:120,
      render:(_,record) => {
        if(record.ifIncludedCouple ==="true"){
          return "含陪读"
        }else if(record.ifIncludedCouple ==="false"){
          return "单独"
        }else if(record.ifIncludedCouple === ""){
          return "--"
        }else{
          return record.ifIncludedCouple
        }
      } 
    },
    {
      title: '详情',
      key: 'details',
      width:'auto',
      render: (_, record) => (
    
          <div className="flex gap-2 whitespace-nowrap">
          <Button size="small" onClick={()=>{handleDetail(record)}}>详情</Button>
         {isAdmin && (<Button size="small" onClick={()=>{handleEditBtnClick(record)}}>编辑</Button>)} 
         {isAdmin && (<Button size="small" onClick={()=>{handleDelete(record._id!)}}>删除</Button>)} 
          </div>
          
      
      ),
    },

  ];


  return (
    <div>
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={data}
        onChange={handleTableChange}
        pagination={false}
        loading={loading}
        tableLayout="auto"
        className="h-full overflow-y-auto w-screen"
      />
      <Pagination
      className="flex items-center justify-end space-x-2"
        total={tableParams.pagination?.total}
        current={tableParams.pagination?.current}
        pageSize={tableParams.pagination?.pageSize}
        showSizeChanger
        showTotal={(total) => `Total ${total} items`}
        onChange={(page, pageSize) => {
          setTableParams({
            ...tableParams,
            pagination:{
              current:page,
              pageSize:pageSize
            }
          })
        }}
      />


      <DetailModal visible={isDetailModalOpen} record={selectedRecord} onClose={() => setIsDetailModalOpen(false)} />
      <EditModal visible={isEditModalOpen} data={selectedRecord} onClose={handleCloseEditModal} onOk={handleEdit}  />
    </div>
  )
};

export default TablePage;
