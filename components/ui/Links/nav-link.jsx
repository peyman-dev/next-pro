"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  exact = false,
  children,
  className,
  activeCn = "",
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  const cn = classNames(
    "px-4 rounded-md transition-colors duration-200 " + className,
    {
      [activeCn]: isActive,
    }
  );

  return (
    <Link href={href} className={cn}>
      {children}
    </Link>
  );
}
