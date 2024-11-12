import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
const Page = () => {
  return (
    <div className='ml-4 mt-8'>
       <Timeline
    items={[
      {
        children: '网站发布: 2024-10-21',
      },
      {
        children: 'feat: 根据下签时间进行排序功能上线 2024-10-23',
      },
      {
        children: 'feat: 根据网友Wenbo Xiao 的建议学历增加MPhil选项 2024-10-24',
      },
      {
        children: 'feat: 重构表格技术选型并添加分页功能 2024-10-25',
      },
      {
        children: 'fix: 详情展示调整样式json->好看的表格 2024-10-29',
      },
      {
        children: 'feat: 本硕博增加筛选功能 2024-11-01',
      },
      {
        children: 'feat: 增加陪读筛选功能，并将数据库中脏数据清洗；增加更新日志菜单,便于用户了解网站新功能点,也是告诉大家我们是在持续开发持续进步的！！加油，passion！ 2024-11-12',
      },
      {
        dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        children: `留言板功能正在设计开发中，已于11-09开发，预计11月中旬开发完成(年底了，本职工作也比较多，开发更新可能会慢一点)`,
      },
    ]}
  />
    </div>
  )
};

export default Page;
