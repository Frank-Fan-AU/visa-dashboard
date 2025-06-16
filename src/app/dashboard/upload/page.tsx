'use client'
import { useUser } from '@clerk/nextjs'

import { ProfileForm } from "./profileForm";
import Image from "next/image";
const UploadPage = () => {
  const {  user } = useUser();
  console.log('user',user)
  return (
    <>
    <p className='text-xl text-red-500 mb-10 ml-8 mt-2'>如果你在等签期间觉得这个网站对你有帮助，请在您下签后将您的信息分享给网站，让更多需要的人受益！</p>

          <ProfileForm userEmail={user?.emailAddresses[0].emailAddress}></ProfileForm>
          
    
    </>
  );
};

export default UploadPage;
