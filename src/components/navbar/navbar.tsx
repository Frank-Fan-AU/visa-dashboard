import Link from "next/link";
import Links from "./links/links";

const Navbar = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-100 shadow-sm">
      <div className=" mx-auto h-full flex items-center justify-between px-6">
        <Link 
          href="/" 
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          AU-500-visa-dashboard
        </Link>
        <Links />
      </div>
    </div>
  )
};

export default Navbar;
