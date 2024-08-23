import { ProfileForm } from "./profileForm";
import Image from "next/image";
export default async function TestPage() {
  return (
    <>
      <div className="flex flex-row ">
        <div className=" w-1/3 px-5">
          <Image
            src="https://images.pexels.com/photos/20642051/pexels-photo-20642051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Sydney Opera House"
            width={400}
            height={300}
            className="rounded-md"
          />
        </div>
        <div className="w-2/3">
          <ProfileForm></ProfileForm>
        </div>
        
      </div>
    </>
  );
}
