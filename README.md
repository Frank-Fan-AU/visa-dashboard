# 我们的初衷

## 下签追踪相关
主要目标是做下签追踪，给正在等签的朋友们一点信息（心理安慰）

通过微信群+小红书追踪的方式存在严重的弊端：微信群限制500人，所以有很多群，而且消息很多，每次看要爬楼爬很久，小红书同理


而且，一般情况下，做下签追踪，基本上等维护信息的博主下签后这事就黄了，帖子就断更了，然后我估计我女朋友那下签追踪估计也差不多。

如果要是能做成网站这种，用户下签了就补充下自己信息，再加上定期换维护信息的管理员，这样信息应该就不会断了。

## 递签攻略相关

在跟女朋友准备学签+陪读签的过程中发现信息来源很杂，小红书一部分，微信群一部分，就导致女朋友动不动发现有什么材料要补

所以只做了递签攻略模块，准备递签的朋友能一站式的搜集到可靠的信息。

目前只开放了一些非常公开的，必要的。等我们下签了之后会把我们的所有材料都放出来（担心自己没下误导别人了）

## 留言板

女朋友强烈要求的模块，可能是等签的朋友们心里压力都大，都想要个吐槽的地方

## 其他

后面还想做那种翻译、中介避雷模块，就是属于被翻译坑到了，省的别人再踩这个坑。而且群里动不动就能看见吐槽中介的，催签诈骗的。有一个可靠的，全面的避雷渠道还蛮有价值的

要是大伙集思广益能把这个网站做起来，每个准备出国留学的人都有个纯净的信息汇总渠道，中介、翻译避雷渠道渠道，感觉是件挺有意义的事情

当然我也是有一点死心的，去陪读要找工作，单位的项目也拿不出来，写个开源的用的人多的项目应该蛮有帮助的

# 加入我们

复刻这个项目并不难，一两周就能写出来，我也懒得保护我的代码了。我认为这个网站的核心在于运营，具体一点就是：数据收集、用户体验、内容管理（材料相关）、营销

如果对运营有任何想法可以邮件我 fanzejiea@gmail.com ，我会邀请你加入我们。

其实目前开发力量不是很缺，但还是有不少issue等待解决，如果想为开源项目做出贡献可以提出珍贵的pr

有bug，或者修改建议也可以提issue


# 技术栈

前后端：NextJS14

数据库中间件:mongoosejs

数据库：MongoDB Altas

等数据量起来了考虑用java代替，同时现在看来如果用MongoDB的免费额度用完了还需要迁移到主机

代码仓库：github

部署：Route53域名托管+Amplify一键部署

组件库：

    clerk：认证

    TailwindCSS

    shadcn/ui

    adtd

    lucide-react:图标

    react-hook-form: shadcn/ui form依赖

    zod：表单校验

    tanstack-react-table: shadcn/ui table依赖

    mdx：长文章书写+展示


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
