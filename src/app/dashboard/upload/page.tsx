'use client'
import { useUser } from '@clerk/nextjs'

import { ProfileForm } from "./profileForm";
import Image from "next/image";
const UploadPage = () => {
  const {  user } = useUser();
  console.log('user',user)
  return (
    <>
      <div className="flex lg:flex-row flex-col mt-8">
        <div className=" w-full lg:w-3/4  px-5">
          <ProfileForm userEmail={user?.emailAddresses[0].emailAddress}></ProfileForm>
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

    </>
  );
};

export default UploadPage;
