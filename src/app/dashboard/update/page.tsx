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
        children: `feat:留言板功能开发完成，start:2024-11-09 end:2024-11-15`,
      },
      {
        dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        children: `留言板功能上线后收集问题、需求，进行后续微调。`,
      },
      // {
      //   children: `重大后台修改，测试环境用户满100人后无法注册，将认证服务切换至正式环境，需要大家重新注册下，给已注册用户造成不便了，不好意思！属于是之前开发的项目没这么多用户，确实没遇到过这个问题`,
      // },
      // {
      //   children: `其实我们表格是不用注册也能看的，所以愿意注册的用户是很宝贵的，愿意注册后填写自己下签信息的贡献者更加宝贵，这次要麻烦用户用相之前的邮箱重新注册，其实算是一个很大的事故了`,
      // },
    ]}
  />
    </div>
  )
};

export default Page;
