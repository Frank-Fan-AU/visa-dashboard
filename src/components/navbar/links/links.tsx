"use client";

import NavLink from "./navLink/navLink";

const links = [
  { title: "Home", path: "/" },
  { title: "Table", path: "/table" },
  { title: "Test", path: "/test" }
];
const Links = () => {
  return (
    <div className="flex gap-4 items-center">
      {links.map((link, index) => (
        <NavLink item={link} key={index} /> // Pass the link object to NavLink component
      ))}
    </div>
  )
};

export default Links;
