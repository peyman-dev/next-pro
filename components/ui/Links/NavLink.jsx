"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  href,
  class: _classes,
  activeClass,
  children,
  exact,
  ...rest
}) => {
  const path = usePathname();
  // is Active
  const isActive = exact ? path === href : path.startsWith(href);

  const styles = classNames(_classes);

  return (
    <Link
      href={href}
      className={`${styles} ${isActive && activeClass}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
