"use client";
import Button from "../Button";
import Link from "next/link";

const NavItem = ({ page, isActive, setTab }) => {
  return (
    <Link href={page.href}>
      <Button isActive={isActive}>{page.label}</Button>
    </Link>
  );
};

export default NavItem;
