"use client";
import { useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Table, Pagination, Button, Input, Space} from "antd";
import type { TableColumnsType, TableProps,GetProp, InputRef, TableColumnType } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { SorterResult, SortOrder } from 'antd/es/table/interface';
import type { FilterDropdownProps } from 'antd/es/table/interface';
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
  const [sortOrder, setSortOrder] = useState<SortOrder | null>('descend'); // 初始排序状态

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  type DataIndex = keyof Record;

  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 50,
    },
  });

  const { user } = useUser();
  const isAdmin = user?.organizationMemberships[0]?.role === "org:admin";

  const fetchData = async () => {
    setLoading(true);
    const queryString = qs.stringify(tableParams, { encode: true, indices: false });
  
    try {
      const response = await fetch(`/api/visaTable?${queryString}`);
      const { data, totalRecords } = await response.json();
      setData(data);
      setTableParams((prevParams) => ({
        ...prevParams,
        pagination: {
          ...prevParams.pagination,
          total: totalRecords,
        },
      }));
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };


useEffect(() => {
  fetchData();
}, [
  tableParams.pagination?.current,
  tableParams.pagination?.pageSize,
  tableParams.sortOrder,
  tableParams.sortField,
  JSON.stringify(tableParams.filters),
]);

  const handleTableChange= (pagination:any, filters:any, sorter:any) => {
    setSortOrder(sorter.order || null); // 更新排序状态

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
      
      await fetchData();
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
    await fetchData();
  };

  // 工具函数：根据排序状态生成静态提示
const getSorterTooltip = (sortOrder?: 'ascend' | 'descend' | null): string => {
  if(sortOrder === 'ascend'){
    return '点击由近到远排序'
  }else if(sortOrder === 'descend'){
    return '点击取消排序'
  }
  return '点击由远到近排序'
};

const handleSearch = (
  selectedKeys: string[],
  confirm: FilterDropdownProps['confirm'],
  dataIndex: DataIndex,
) => {
  confirm();
  setSearchText(selectedKeys[0]);
  setSearchedColumn(dataIndex);
};
const handleReset = (clearFilters: () => void) => {
  clearFilters();
  setSearchText('');
};

//工具函数： 表头搜索框
const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<Record> => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
    <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
      <Input
        ref={searchInput}
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button
          onClick={() => clearFilters && handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>

        <Button
          type="link"
          size="small"
          onClick={() => {
            close();
          }}
        >
          close
        </Button>
      </Space>
    </div>
  ),
  filterIcon: (filtered: boolean) => (
    <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
  ),
  render: (text) =>
   text
});


  const columns: TableColumnsType<Record> = [
    {
      title: '是否已下签',
      dataIndex: 'ifGetVisa',
      width:120,
      render: (_, record) => {
        return record.ifGetVisa === "true" ? '已下签' : '未下签';
      },
      filters: [
        { text: '已下签', value: "true" },
        { text: '未下签', value: "false" },
      ],
    },

    {
      title: '递签日期',
      dataIndex: 'submitTime',
      sorter: true,
      width: 130,
      showSorterTooltip: { title: getSorterTooltip(sortOrder) }, // 传入静态提示
    },
    {
      title: '下签日期',
      dataIndex: 'getVisaTime',
      sorter: true,
      defaultSortOrder: 'descend',
      width: 130,
      showSorterTooltip: { title: getSorterTooltip(sortOrder) }, // 传入静态提示
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
        { text: 'Non-Award', value: 'Non-Award' },
        { text: 'MPhil', value: 'MPhil' },
      ],
    },
    {
      title: '专业',
      dataIndex: 'major',
      ...getColumnSearchProps('major'),
    },
    {
      title: '递签地点',
      dataIndex: 'submitPlace',
      width:120,
      filters: [
        { text: '国内递交', value: '国内递交' },
        { text: '海外递交', value: '海外递交' },
        { text: '澳洲境内递交', value: '澳洲境内递交' }
      ],
    },
    {
      title: '是否含陪读',
      dataIndex: 'ifIncludedCouple',
      width:120,
      filters: [
        { text: '单独学签', value: '单独学签' },
        { text: '含陪读一起递', value: '含陪读一起递' },
        { text: '陪读单独递', value: '陪读单独递' }
      ],
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
        className="overflow-y-auto w-screen"
      />
      <Pagination
      className="flex items-center justify-end space-x-2 custom-pagination mt-4 mb-2 mr-4"
        total={tableParams.pagination?.total}
        current={tableParams.pagination?.current}
        pageSize={tableParams.pagination?.pageSize}
        simple={{ readOnly: true }}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `共 ${total} 条`}
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
      <style jsx global>{`
        @media only screen and (max-width: 576px) {
          .custom-pagination .ant-pagination-options {
            display: block !important;
          }
        }
      `}</style>
    </div>
  )
};

export default TablePage;
