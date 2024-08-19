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
  return <Link href={item.path} className={` w-24 p-2 font-bold rounded-xl text-center  ${pathname === item.path ? " bg-slate-300" : ""}`}>{item.title}</Link>;
};

export default NavLink;
