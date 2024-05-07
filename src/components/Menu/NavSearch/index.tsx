import { Search } from "lucide-react";

import { motion } from "framer-motion";

import { useMainContext } from "@/context/MainContext";
import { HEIGHT_NAV_HEADER } from "..";

export function NavSearch() {
  const { isOpenSearch } = useMainContext();

  return (
    <div
      className={`position fixed left-0 right-0 top-[${HEIGHT_NAV_HEADER}px]`}
    >
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: isOpenSearch ? 0 : -300, opacity: isOpenSearch ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="border-b bg-paper p-2.5 px-5">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-2.5">
              <Search className="size-5 text-primary" />
            </div>
            <input
              type="text"
              className="block h-11 w-full rounded-lg bg-gray-200 p-1.5 ps-10 text-sm text-gray-900"
              placeholder="Buscar no cardápio"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
