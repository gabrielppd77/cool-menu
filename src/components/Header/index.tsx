import { NavItem } from "./NavItem";
import { Logo } from "../Logo";

export function Header() {
  return (
    <header className="z-20 flex h-16 items-center justify-center gap-8 border-b">
      <Logo />
      <nav className="flex gap-6">
        <NavItem label="Início" />
        <NavItem label="Menu" />
      </nav>
    </header>
  );
}
