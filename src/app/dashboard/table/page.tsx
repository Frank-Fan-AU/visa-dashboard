"use client";

import { useEffect, useState } from "react";

import { Table, Pagination, Button, Space, Tooltip } from "antd";
import type { TableColumnsType, TableProps,GetProp } from 'antd';
import type { SorterResult } from 'antd/es/table/interface';
import { Record } from "@/type/Record";
import { fetchDataApi } from "@/api/visaTable";
import qs from 'qs';
import { DetailModal } from "./detailModal";

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


  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const fetchData = () => {
    setLoading(true);
    console.log('tableparams',tableParams)
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
    tableParams?.sortOrder,
    tableParams?.sortField,
    JSON.stringify(tableParams.filters),
  ]);

  const handleTableChange= (pagination:any, filters:any, sorter:any) => {
    // 保留之前的 pagination 值，合并新的 pagination 值
  const updatedPagination = {
    ...tableParams.pagination, // 保留之前的 pagination 值
    ...pagination, // 用新的 pagination 值覆盖之前的值
  };


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
      width:100
    },
    {
      title: '专业',
      dataIndex: 'major',
      ellipsis: {
        showTitle: false,
      },
      render: (major) => (
        <Tooltip placement="topLeft" title={major}>
          {major}
        </Tooltip>
      ),
    },
    {
      title: '递签地点',
      dataIndex: 'submitPlace',
      width:120
    },
    {
      title: '详情',
      key: 'details',
      render: (_, record) => (
        <Space size="middle">
          <Button size="small" onClick={()=>{handleDetail(record)}}>详情</Button>
          <Button size="small">编辑</Button>
          <Button size="small">删除</Button>
        </Space>
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
          console.log('page',page)
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
    </div>
  )
};

export default TablePage;
