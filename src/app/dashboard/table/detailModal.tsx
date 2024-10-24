
import { Modal } from 'antd'; // 使用 Ant Design 的 Modal 组件
import { Badge, Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';


interface DetailModalProps {
  data: any;
  onClose: () => void;
}


export const DetailModal = ({ data, onClose }:DetailModalProps) => {

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '学校',
      children: data.schoolType == "" ?  "未填写": data.schoolType,
    },
    {
      key: '2',
      label: '专业',
      children: data.major == "" ?  "未填写": data.major,
    },
    {
      key: '3',
      label: '是否DIY',
      children: data.ifDIY == "" ? "未填写": data.ifDIY == 'true' ? "DIY" : "找的中介",
    },
    {
      key: '4',
      label: '其他信息',
      children: data.otherInfo == "" ? "未填写": data.otherInfo,
    },
   
  ];
  
  return (
    <Modal
      title="详细信息"
      open={true}
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