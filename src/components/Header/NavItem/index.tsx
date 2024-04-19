import { useEffect, useState } from "react";

import Link from "next/link";
import { useParams } from "next/navigation";

import clsx from "clsx";

interface NavItemProps {
  link: string;
  label: string;
}

export function NavItem({ label, link }: NavItemProps) {
  const [hash, setHash] = useState("");

  const params = useParams();

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);

  return (
    <Link
      className={clsx(
        "text-primary font-bold duration-200",
        "hover:text-primary-hover",
        link.includes(hash) ? "text-primary-highlight" : "text-primary",
      )}
      href={link}
    >
      {label}
    </Link>
  );
}
