import { ProfileForm } from "./profileForm";
import Image from "next/image";
const AdminPage = () => {
  return (
    <>
    <div className="flex flex-row mt-[80px]">
     
      <div className="w-full px-5 ">
        <ProfileForm></ProfileForm>
      </div>
      {/* <div className=" w-1/4  ml-4">
        <Image
          src="https://images.pexels.com/photos/20642051/pexels-photo-20642051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Sydney Opera House"
          width={400}
          height={300}
          className="rounded-md"
        />
      </div> */}
      
    </div>
    <p className="mt-10 ml-4 text-sm text-gray-500">以上问题均不是必填项，您可以根据个人情况自愿分享，感谢您的支持</p>
  </>
  )
};

export default AdminPage;
