import NavItem from "./NavItem";

export function CategoryNav() {
  return (
    <nav className="flex gap-2 border-b">
      <NavItem
        title="Os Mais Vendidos do IFood"
        link="/#os-mais-vendidos-do-ifood"
      />
      <NavItem title="Hambúrguer Artesanal" link="/#hamburguer-artesanal" />
    </nav>
  );
}
