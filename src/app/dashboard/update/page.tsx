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
        children: `fix:重大后台修改，测试环境用户满100人后无法注册，将认证服务切换至正式环境，需要大家重新注册下，给已注册用户造成不便了，不好意思！属于是之前开发的项目没这么多用户，确实没遇到过这个问题`,
      },
      {
        children:`fix:修改排序功能，根据下签时间排序时，相同下签时间的根据递签日期排序，根据递签日期排序时，相同递签日期的根据下签时间排序 2024-12-03`,
      },
      {
        children:`fix: 优化分页组件在手机小屏幕的显示问题 2024-12-03`,
      },
      {
        children:`feat: 添加递签攻略免责声明、学位增加Non-Award选项并在表格中添加对应筛选 2024-12-12`
      },
      {
        children:`feat: 表格添加递签地点的筛选功能 2024-12-15`
      },
      {
        children:`feat: 修改更好用的日期组件，避免很久以前的用户录入自己递签日期不便 2024-12-19`
      },
      {
        children:`feat: 表格添加专业搜索功能,更换网站header logo. 2024-12-24`
      },
      {
        children:`feat: 使用contentful CMS来管理递签攻略内容，此后递签攻略内容部分可交由开发之外的人(bingqi)进行管理 & 优化内容显示样式 2024-12-25`
      },
      {
        children:`feat: 增加是否下签列，并添加其筛选功能，添加页数跳转 2024-12-27（大周五晚上被bingqi抓着改代码） 2024-12-27`
      },
      {
        children:`feat: 增加签证官查询功能 2025-01-20`
      },
      {
        children:`feat: 下签啦，下签啦，站长下签啦~~，新增庆祝组件，热烈庆贺！ 2025-02-11`
      },
      {
        children:`feat: 去除下签庆祝组件，避免引起还未下签的用户的不适 2025-02-14`
      },
    ]}
  />
    </div>
  )
};

export default Page;
