import { MenuNav } from "./MenuNav";
import { MenuContent } from "./MenuContent";
import { NavSearch } from "./NavSearch";

export const HEIGHT_NAV_HEADER = 112;

export function Menu() {
  return (
    <section className="rounded bg-paper p-4 shadow-lg">
      <MenuNav />
      <NavSearch />
      <MenuContent />
    </section>
  );
}
