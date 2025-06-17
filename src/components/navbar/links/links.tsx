'use client';
import useTranslation from "@/hooks/useTranslation";
import NavLink from "./navLink/navLink";
import { useUser, SignInButton } from "@clerk/nextjs";

const Links = () => {
  const { t, lang } = useTranslation();
  const { isSignedIn, user } = useUser();
  const isAdmin = user?.organizationMemberships[0]?.role === "org:admin";

  const links = [
    { title: t.navbar.visatable, path: "/dashboard/table" },
    { title: t.navbar.visaGuide, path: "/dashboard/doc" },
    { title: t.navbar.messageBoard, path: "/dashboard/message" },
    { title: t.navbar.updateLog, path: "/dashboard/update" },
    { title: t.navbar.donate, path: "/dashboard/donate" },
  ];

  // 登录后显示的链接
  if (isSignedIn) {
    links.push({ title: t.navbar.profile, path: "/dashboard/upload" });
  }

  // admin显示的链接
  if (isAdmin) {
    links.push({ title: t.navbar.admin, path: "/dashboard/admin" });
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-1 space-y-2 md:space-y-0">
      {links.map((link, index) => (
        <NavLink item={link} key={index} />
      ))}
    </div>
  );
};

export default Links;
