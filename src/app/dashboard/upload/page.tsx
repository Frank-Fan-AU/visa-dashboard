import { ProfileForm } from "./profileForm";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
const UploadPage = () => {
  const { userId }: { userId: string | null } = auth();
  console.log("userOId", userId);
  return (
    <>
      <div className="flex lg:flex-row flex-col mt-8">
        <div className=" w-full lg:w-3/4  px-5">
          <ProfileForm userId={userId}></ProfileForm>
        </div>
        <div className=" w-full lg:w-1/4  lg:ml-4">
          <Image
            src="/xiaqian.jpeg"
            alt="Sydney Opera House"
            width={400}
            height={300}
            className="rounded-md"
          />
        </div>
      </div>
      <p className="mt-10 ml-4 text-sm text-gray-500">以上问题均不是必填项，您可以根据个人情况自愿分享，感谢您的支持</p>

    </>
  );
};

export default UploadPage;
