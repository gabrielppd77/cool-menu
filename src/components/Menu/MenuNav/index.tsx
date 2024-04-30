import { NavHeader } from "./NavHeader";
import { NavContent } from "./NavContent";

export function MenuNav() {
  return (
    <div className="fixed left-0 right-0 top-0 bg-paper">
      <NavHeader />
      <NavContent />
    </div>
  );
}
