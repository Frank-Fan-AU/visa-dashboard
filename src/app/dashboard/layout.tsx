import type { Metadata } from "next";
import { MySidebarDemo } from "@/components/dashboard/mySidebar";
export const metadata: Metadata = {
  title: "visa-dashboard",
  description: "澳洲500学签信息收集表格",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <MySidebarDemo>{children}</MySidebarDemo> */}
      <div className="w-full px-2 sm:px-4 md:px-6">{children}</div>
    </>
  );
}
