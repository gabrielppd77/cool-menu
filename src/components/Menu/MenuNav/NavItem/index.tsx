import { useEffect, useState } from "react";

import Link from "next/link";

import { useParams } from "next/navigation";
import clsx from "clsx";

interface NavItemProps {
  title: string;
  link: string;
}

export default function NavItem({ title, link }: NavItemProps) {
  const [hash, setHash] = useState("");

  const params = useParams();

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);

  const isHighlight = link.includes(hash);

  return (
    <Link
      className={clsx("font-bold text-primary duration-200 hover:scale-105", {
        ["brightness-0"]: isHighlight,
      })}
      href={link}
    >
      {title}
      <div
        className={clsx(
          "h-[1px] w-full bg-paper transition-colors duration-200",
          {
            ["bg-primary"]: isHighlight,
          },
        )}
      />
    </Link>
  );
}
