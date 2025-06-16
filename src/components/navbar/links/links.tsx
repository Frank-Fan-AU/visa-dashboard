'use client';
import useTranslation from "@/hooks/useTranslation";
import NavLink from "./navLink/navLink";

const Links = () => {
  const { t, lang } = useTranslation();
  const links = [
    { title: t.navbar.visatable, path: "/dashboard/table" },
    { title: t.navbar.visaGuide, path: "/dashboard/doc" },
    { title: t.navbar.messageBoard, path: "/dashboard/message" },
    { title: t.navbar.updateLog, path: "/dashboard/update" },
    { title: t.navbar.donate, path: "/dashboard/donate" },
    { title: t.navbar.profile, path: "/dashboard/upload" },
    { title: t.navbar.admin, path: "/dashboard/admin" },
  ];
  return (
    <div className="flex items-center space-x-1">
      {links.map((link, index) => (
        <NavLink item={link} key={index} />
      ))}
    </div>
  );
};

export default Links;
