"use client";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { IconBrandTabler } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Table2, FileUp, House } from "lucide-react";
import { cn } from "@/lib/utils";

export function MySidebarDemo({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSignedIn, user } = useUser();
  const isAdmin = user?.organizationMemberships[0]?.role === "org:admin";
  const links = [
    {
      label: "Home",
      href: "/dashboard",
      icon: (
        <House className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Table",
      href: "/dashboard/table",
      icon: (
        <Table2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "w-full rounded-md flex flex-col md:flex-row bg-gray-100  dark:bg-neutral-800  flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}>
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              {isSignedIn && !isAdmin &&(
                <SidebarLink
                  key={"upload"}
                  link={{
                    label: "Upload",
                    href: "/dashboard/upload",
                    icon: (
                      <FileUp className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                    ),
                  }}
                />
              )}
              {isAdmin && (
                <SidebarLink
                  key={"admin"}
                  link={{
                    label: "Admin",
                    href: "/dashboard/admin",
                    icon: (
                      <FileUp className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                    ),
                  }}
                />
              )}
            </div>
          </div>
          <div>
            <SignedOut>
              <div className="font-bold ">
                <SignInButton />
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SidebarBody>
      </Sidebar>
      {/* <Dashboard /> */}
      <div className="flex flex-1 ">
        <div className="flex flex-col  w-full h-full dark:border-neutral-700 bg-white dark:bg-neutral-900 ">
          {children}
        </div>
      </div>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre">
        AU-500-VISA-Dashboard
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          {[...new Array(4)].map((i) => (
            <div
              key={"first" + i}
              className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(2)].map((i) => (
            <div
              key={"second" + i}
              className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
};
