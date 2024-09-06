import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "visa-dashboard",
  description: "澳洲500学签信息收集表格",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
