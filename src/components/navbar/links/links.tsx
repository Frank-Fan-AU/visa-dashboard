import NavLink from "./navLink/navLink";
const links = [
  { title: "Home", path: "/" },
  { title: "Dashboard", path: "/dashboard" },
];
const Links = () => {
  return (
    <div className="flex gap-4 items-center pr-4">
      {links.map((link, index) => (
        <NavLink item={link} key={index} /> // Pass the link object to NavLink component
      ))}
    </div>
  );
};

export default Links;
