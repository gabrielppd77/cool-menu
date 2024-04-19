import Link from "next/link";

import { NavItem } from "./NavItem";
import Image from "next/image";

export function Header() {
  return (
    <header className="z-20 flex h-16 items-center justify-center gap-8 border-b">
      <Link
        className="text-primary flex items-center gap-2 font-bold"
        href="/#home"
      >
        <Image alt="icon-meal-top" src="/meal.jpeg" height={40} width={40} />
        Lili Grill
      </Link>

      <nav className="flex gap-6">
        <NavItem label="Início" link="/#home" />
        <NavItem label="Menu" link="/#menu" />
      </nav>
    </header>
  );
}
