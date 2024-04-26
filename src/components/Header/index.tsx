import Link from "next/link";

import { NavItem } from "./NavItem";
import Image from "next/image";

export function Header() {
  return (
    <header className="z-20 flex h-16 items-center justify-center gap-8 border-b">
      <Link href="/" className="flex items-center gap-2 font-bold text-primary">
        <Image alt="icon-meal-top" src="/meal.jpeg" height={40} width={40} />
        Lili Grill
      </Link>

      <nav className="flex gap-6">
        <NavItem label="Início" />
        <NavItem label="Menu" />
      </nav>
    </header>
  );
}
