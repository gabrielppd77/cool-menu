import Link from "next/link";

import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavItemProps {
  title: string;
  link: string;
}

export default function NavItem({ title, link }: NavItemProps) {
  const path = usePathname();

  const isHightLight = path.includes(link);

  return (
    <Link
      className={clsx(
        "text-primary font-bold duration-200",
        "hover:text-primary-hover",
        isHightLight ? "text-primary-highlight" : "text-primary",
      )}
      href={link}
    >
      {title}
    </Link>
  );
}
