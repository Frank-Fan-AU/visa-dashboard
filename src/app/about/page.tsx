import Image from "next/image";
const AboutPage = () => {
  return (
    <main className="flex flex-col items-center justify-between">
    <h1 className="text-4xl font-bold mb-2">是什么</h1>

    <p>这个项目就是一个简单的表格，用来记录一下每天各个专业获签的进度。不喜欢啰嗦的朋友可以直接点右上角Table看数据</p>
    <p>登录过后可以维护自己的信息，后续我博客部分做出来了也可以分享自己的递签等签过程，说不定就有好兄弟发现你漏了什么材料好心提醒你一下</p>
    
    <h1 className="text-4xl font-bold my-2">为啥做这个？</h1>
    <p>上班没工夫各个平台跑看大伙获签进度，也没工夫盯群。但是有很好奇签证进度到哪了，各个专业批的怎么样了。我觉得应该会有人跟我有一样的想法</p>
    <p>微信群有500人数限制，然后好像也没找到什么统计下签进度的网站，所以想着自己做一个</p>
    
    <p>对我个人来说，上班一直做的是公司项目，由于在VDI里拿不出来不便于展示，为了丰富简历，所以就想着做这个项目。</p>
  
    <p>（计算机专业还在上学缺项目的同学可以解决下面的代办做做贡献，丰富下简历）</p>

    <p>所以有github的好兄弟可以帮忙点点star</p>
    <h2 className="text-3xl font-bold my-2">目前免费</h2>

    <p>现在也不知道会不会有人用，所以服务器的成本为0，后续如果用的人太多了，服务器成本太多的话才会考虑怎么创收来平摊成本</p>

    <h1 className="text-3xl font-bold my-2">数据来源</h1>
    目前打算数据先由我女朋友从各个群、小红书手动维护（主要是她很关注这个签证，一直在刷各个平台），我们也会给每条数据注明出处
    <h1 className="text-5xl font-bold my-2">后续功能PLAN</h1>
    <p className="line-through">step1:先把展示表格做出来，能进行最基本的展示</p>
    <p className="line-through">管理界面表单，添加数据</p>
    <p >添加认证，管理界面需要admin用户，普通用户可以上传、修改一条自己的进度（干了一半了）</p>
    <p>带筛选，可以根据递签时间排序，根据专业筛选，根据是否获签筛选</p>
    step3:可以整个邮箱订阅，订阅的用户可以每天邮箱收到当天下签的信息<br/>
    step4:整个博客页用于分享下大家的下签经历，方便大家互相交流（希望我能及早下签及早分享）
    <div className="flex flex-row items-center justify-between">
    <Image src="/emoji1.png" alt="emoji1" width={100} height={100} />
    <Image src="/emoji2.png" alt="emoji2" width={100} height={100} />
    </div>
    
  </main>
  )
};

export default AboutPage;
