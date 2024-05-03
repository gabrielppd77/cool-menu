import { MenuNav } from "./MenuNav";
import { MenuContent } from "./MenuContent";

export function Menu() {
  return (
    <section className="rounded bg-paper p-4 shadow-lg">
      <MenuNav />
      <MenuContent />
    </section>
  );
}
