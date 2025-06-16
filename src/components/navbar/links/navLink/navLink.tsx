"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// 定义 props 类型
interface NavLinkProps {
  item: {
    path: string;
    title: string;
  };
}

const NavLink = ({ item }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;
  
  return (
    <Link 
      href={item.path} 
      className={`
        px-4 py-2 
        font-medium 
        text-gray-600
        transition-all
        duration-200
        relative
        hover:text-blue-600
        ${isActive ? 'text-blue-600' : ''}
      `}
    >
      {item.title}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
      )}
    </Link>
  );
};

export default NavLink;
