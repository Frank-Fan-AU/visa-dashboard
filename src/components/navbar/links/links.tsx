"use client";

import NavLink from "./navLink/navLink";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";

const links = [
  { title: "Home", path: "/" },
  { title: "Table", path: "/table" },
];
const Links = () => {
  const { isSignedIn, user } = useUser();
  const isAdmin = user?.organizationMemberships[0]?.role === 'org:admin'
  return (
    <div className="flex gap-4 items-center pr-4">
      {links.map((link, index) => (
        <NavLink item={link} key={index} /> // Pass the link object to NavLink component
      ))}
      {isSignedIn && <NavLink item={{ title: "Upload", path: "/upload" }} />}
      {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
      <SignedOut>
        <div className="font-bold ">
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Links;
