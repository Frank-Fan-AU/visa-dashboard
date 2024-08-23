import Link from "next/link";
import Links from "./links/links";

const Navbar = () => {
  return (
    <div className=" h-20 flex items-center justify-between px-4 ">
      <Link href="/" className="text-2xl font-bold">AU-500-visa-dashboard</Link>
      
        <Links></Links>
     
    </div>
  )
};

export default Navbar;
