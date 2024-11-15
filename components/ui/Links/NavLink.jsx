"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  href,
  class: className,
  activeClass,
  children,
  exact,
  ...rest
}) => {
  const path = usePathname();
  const isActive = String(path).startsWith(href);

  const styles = classNames(className, {
    [activeClass]: isActive,
  });

  return (
    <Link href={href} className={styles} {...rest}>
      {children}
    </Link>
  );
};

export default NavLink;
