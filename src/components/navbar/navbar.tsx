import Link from "next/link";
import Links from "./links/links";

const Navbar = () => {
  return (
    <div className=" h-24 flex items-center justify-between px-4">
      <Link href="/" className="text-2xl font-bold">还没画的Logo</Link>
      
        <Links></Links>
     
    </div>
  )
};

export default Navbar;
