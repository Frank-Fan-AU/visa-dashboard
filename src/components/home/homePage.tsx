import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { Skeleton } from "@/components/ui/skeleton";
import Contributors from "./contributors";
import RightPart from "./rightPart";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-row items-center justify-center  px-8 mb-4">
      <div className="w-1/2 ">
        <HeroHighlight className="h-96">
        <h1 className="text-5xl font-bold text-black px-4 pb-4">AU-500-VISA-Dashboard</h1>
          <h1 className="text-5xl font-bold text-black px-4 py-2">欢迎👏🏻 </h1>
          <h2 className="text-3xl font-bold text-black px-4 pt-2">
            旨在帮您更容易得获取所有要关心的签证信息
          </h2>
          <div className="text-black py-10 px-4">
            <Highlight>分享您的签证进度，</Highlight>
            交流签证信息，帮助到更多正在准备签证的人
          </div>
          <div className="flex flex-row items-center ">
            <div className="px-4">
              <Link href="/dashboard">
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Visa-Dashboard
                  </div>
                </button>
              </Link>
            </div>
            <div className="px-4">
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-white rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent">
                  Login to Share
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-row items-start justify-start mb-2 w-full  ">
            <Contributors></Contributors>
          </div>
          <div className="px-4 mt-12 font-light text-slate-500 ">
            众人拾柴火焰高，加入开发 or 信息搜集
            <br />
            联系:fanzejiea@gmail.com
          </div>
        </HeroHighlight>
      </div>
      <div className="w-1/2  flex flex-col">
        {/* <Image className="rounded-md mt-12" src={"https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="image" width={600} height={500} /> */}

        <RightPart></RightPart>
      </div>
    </div>
  );
};

export default HomePage;
