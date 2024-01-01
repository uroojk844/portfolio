import NavItem from "./NavItem";

const NavContent = () => {
  const pages = [
    {
      label: "Home",
      href: "/#home",
    },
    {
      label: "About",
      href: "/#about",
    },
    {
      label: "Skills",
      href: "/#skills",
    },
    {
      label: "Projects",
      href: "/#projects",
    },
    {
      label: "Contact",
      href: "/#contact",
    },
  ];

  return (
    <div className="flex gap-4 max-sm:hidden">
      {pages.map((page, index) => (
        <NavItem
          isActive={false}
          page={page}
          key={index}
        />
      ))}
    </div>
  );
};

export default NavContent;
