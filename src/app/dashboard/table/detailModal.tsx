import React, { useState } from 'react';
import { Modal } from 'antd'; // 使用 Ant Design 的 Modal 组件

interface DetailModalProps {
  data: any;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ data, onClose }) => {
  return (
    <Modal
      title="详细信息"
      visible={true}
      onOk={onClose}
      onCancel={onClose}
    >
      {/* 显示详细信息 */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Modal>
  );
};