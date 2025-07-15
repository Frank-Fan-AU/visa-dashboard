import NewAboutDesign from "@/components/home/newAboutDesign";
import HomePage from "@/components/home/homePage";
import Navbar from "@/components/navbar/navbar";
import UserThanks from "@/components/home/userThanks";

export default function Home() {
  return (
    <main>
      {/* <Navbar/> */}
      <HomePage/>
      <NewAboutDesign/>
      <UserThanks/>
    </main>
  );
}
