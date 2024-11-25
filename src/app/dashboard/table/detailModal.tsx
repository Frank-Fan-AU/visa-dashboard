import { Record } from '@/type/Record';
import { Modal } from 'antd'; // 使用 Ant Design 的 Modal 组件
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';


interface DetailModalProps {
  visible:boolean;
  record: Record | null;
  onClose: () => void;
}


export const DetailModal = ({visible, record, onClose }:DetailModalProps) => {

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '学校',
      children: record?.schoolType == "" ?  "未填写": record?.schoolType,
    },
    {
      key: '2',
      label: '专业',
      children: record?.major == "" ?  "未填写": record?.major,
    },
    {
      key: '3',
      label: '是否DIY',
      children: record?.ifDIY == "" ? "未填写": record?.ifDIY == 'true' ? "DIY" : "找的中介",
    },
    {
      key: '4',
      label: '其他信息',
      children: record?.otherInfo == "" ? "未填写" : (
        <div style={{ 
          whiteSpace: 'pre-wrap',
          lineHeight: '1.5',
          padding: '8px 0'
        }}>
          {record?.otherInfo}
        </div>
      ),
    },
   
  ];
  
  return (
    <Modal
      title="详细信息"
      open={visible}
      onOk={onClose}
      onCancel={onClose}
      width={1000}
    >
      {/* 显示详细信息 */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Descriptions  bordered items={items} />
    </Modal>
  );
};