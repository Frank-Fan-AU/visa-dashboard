import Image from "next/image";
const AboutPage = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <h1 className="text-4xl font-bold mb-2">是什么</h1>
      <p>
        这个项目目前就是一个简单的表格，用来记录一下每天各个专业获签的进度。
      </p>
      <p>
        后续会添加一些其他500学签相关的内容，比如中介红黑榜、natti翻译红黑榜、材料清单检查、学签流程
      </p>
      <h1 className="text-4xl font-bold my-2">为啥做这个？</h1>
      <p>
        我们可以通过今天下签的人递交的日期推断下自己大概什么时候下签，大概安排好后续工作学习租房计划
      </p>
      <p>
        通过微信群+小红书的方式存在严重的弊端：微信群限制500人，所以有很多群，而且消息很多，每次看要爬楼爬很久，小红书同理
      </p>
      <p>
        其实我就关心今天下签的人是几号递签的，什么专业的，哪个签证官勤劳又好心，祈祷下自己碰到那个签证官
      </p>
      <p>
        在跟女朋友准备学签+陪读签的过程中发现信息来源很杂，小红书一部分，微信群一部分，就导致女朋友动不动发现有什么材料要补
      </p>
      <p>
        所以想着做一个网站，专注只做500学签，（学生的时间真的伤不起啊，真的很急）
      </p>
      <p>
        方便大家查看每天下签的进度，方便大家交流材料清单、签证的小道消息、经验等等
      </p>
      <h2 className="text-3xl font-bold my-2">目前免费</h2>
      <p>
        现在也不知道会不会有人用，所以服务器的成本为0，后续如果用的人太多了，服务器成本太多的话才会考虑怎么创收来平摊成本
      </p>
      <p>
        目前有几种思路，一种是买断制订阅收费，一种是卖我们自己的love
        story模版，GS模版（我们成功下签的话）
      </p>
      <h1 className="text-3xl font-bold my-2">数据来源</h1>
      目前打算数据先由我女朋友从各个群、小红书手动维护，我们也会给每条数据注明出处
      <p>
        （主要是她很关注这个签证，一直在刷各个平台，按她的原话，只要上网的学签下签了她都知道）
      </p>
      <h1 className="text-4xl font-bold my-2">后续功能PLAN</h1>
      <p className="line-through">先把展示表格做出来，能进行最基本的展示</p>
      <p className="line-through">管理界面表单，添加数据</p>
      <p>带筛选，可以根据递签时间排序，根据专业筛选，根据是否获签筛选</p>
      <p>
        小道消息列表，比如补材料会不会重新排队、GS注意点、如何修改材料、如何催签等
      </p>
      <p>
        翻译、中介红黑榜，避雷用，我们找的翻译给我们翻译错了一些地方，这种事情可大可小，赌不起，避雷一些垃圾中介、翻译（有踩坑的可以联系我，我补充进来帮助大家避雷）
      </p>
      <p>联系方式：fanzejiea@gmail.com</p>
      <p>模版模块，要等到下签了再公布，免得误人子弟</p>
      <p>最后祝大家早日下签</p>

      <div className="flex flex-row items-center justify-between">
        <Image
          className=" absolute "
          src="/emoji1.png"
          alt="emoji1"
          width={100}
          height={100}
          style={{
            top: "80px",
            left: "80px",
          }}
        />
        <Image
          className=" absolute "
          src="/emoji2.png"
          alt="emoji2"
          width={100}
          height={100}
          style={{
            top: "200px",
            left: "80px",
          }}
        />
        <Image
          className=" absolute "
          src="/emoji3.png"
          alt="emoji3"
          width={100}
          height={100}
          style={{
            top: "380px",
            left: "80px",
          }}
        />
        <Image
          className=" absolute "
          src="/emoji4.png"
          alt="emoji4"
          width={100}
          height={100}
          style={{
            top: "520px",
            left: "80px",
          }}
        />

        <Image
          className=" absolute "
          src="/emoji5.png"
          alt="emoji4"
          width={100}
          height={100}
          style={{
            top: "80px",
            right: "80px",
          }}
        />

<Image
          className=" absolute "
          src="/emoji6.png"
          alt="emoji4"
          width={200}
          height={300}
          style={{
            top: "380px",
            right: "80px",
          }}
        />
      </div>
    </main>
  );
};

export default AboutPage;
