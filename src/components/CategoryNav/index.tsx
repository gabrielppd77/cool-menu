import NavItem from "./NavItem";

export function CategoryNav() {
  return (
    <nav className="flex gap-4 border-b">
      <NavItem title="OS MAIS VENDIDOS" link="/#os-mais-vendidos-do-ifood" />
      <NavItem title="HAMBURGUE ARTESANAL" link="/#hamburguer-artesanal" />
    </nav>
  );
}
