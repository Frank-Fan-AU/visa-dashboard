import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <h1 className="text-4xl font-bold my-2">是什么</h1>
      <br></br>
      这个项目就是一个简单的表格，用来记录一下每天各个专业获签的进度。不喜欢啰嗦的朋友可以直接点右上角Table看数据
      <h1 className="text-4xl font-bold my-2">为啥做这个？</h1>
      上班没工夫各个平台跑看大伙获签进度，也没工夫盯群。但是有很好奇签证进度到哪了，各个专业批的怎么样了。我觉得应该会有人跟我有一样的想法
      
      <br></br>
      对我个人来说，上班一直做的是公司项目，由于保密原因没法公开，为了去了澳洲有个项目能用来找工作，所以就想着做这个项目。
      <h2 className="text-3xl font-bold my-2">目前免费</h2>
      <p>所以有github的好兄弟可以帮忙点点star</p>
      <p>现在也不知道会不会有人用，所以服务器的成本为0，后续如果用的人太多了，服务器成本太多的话才会考虑怎么创收来平摊成本</p>

      <h1 className="text-3xl font-bold my-2">数据来源</h1>
      目前打算数据先由我女朋友从各个群、小红书手动维护（主要是她很关注这个签证，一直在刷各个平台），我们也会给每条数据注明出处
      <h1 className="text-5xl font-bold my-2">后续功能PLAN</h1>
      step1:先把展示表格做出来，带筛选，可以根据递签时间排序，根据专业筛选，根据是否获签筛选<br/>
      step2:可以整个后台管理，方便我女朋友手动维护数据,我查看用户访问数量<br/>
      step2:要不还是整个用户登录？想分享、记录自己下签进度的朋友也能自己维护自己数据<br/>
      step3:可以整个邮箱订阅，订阅的用户可以每天邮箱收到当天下签的信息<br/>
      step4:整个博客页用于分享下大家的下签经历，方便大家互相交流（希望我能及早下签及早分享）
      <div className="flex flex-row items-center justify-between">
      <Image src="/emoji1.png" alt="emoji1" width={100} height={100} />
      <Image src="/emoji2.png" alt="emoji2" width={100} height={100} />
      </div>
      
    </main>
  );
}
