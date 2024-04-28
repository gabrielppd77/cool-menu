import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import { MenuDataType } from "@/app/api/route";
import { motion } from "framer-motion";

interface MenuNavProps {
  categorySelected: string;
  setCategorySelected: (id: string) => void;
  data: MenuDataType[];
}

export function MenuNav({
  categorySelected,
  setCategorySelected,
  data,
}: MenuNavProps) {
  const refNav = useRef<any>(null);
  const [navWidth, setNavWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (refNav.current) {
        setNavWidth(refNav.current?.scrollWidth - refNav.current?.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function onClickItem(id: string) {
    setCategorySelected(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }

  return (
    <div className="fixed left-0 right-0 top-0 border-b-2 bg-paper">
      <div className="h-14 p-2.5"></div>
      <nav ref={refNav} className="cursor-default overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          drag="x"
          dragConstraints={{
            right: 0,
            left: -navWidth,
          }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        >
          {data.map((d) => (
            <div key={d.id}>
              <div
                onClick={(e) => onClickItem(d.id)}
                className={clsx(
                  "flex h-11 flex-col justify-center px-2.5 font-bold text-primary",
                  {
                    ["text-red-200"]: categorySelected === d.id,
                  },
                )}
              >
                <div>{d.name}</div>
              </div>

              <div
                className={clsx("h-1 rounded", {
                  ["bg-red-200"]: categorySelected === d.id,
                })}
              />
            </div>
          ))}
        </motion.div>
      </nav>
    </div>
  );
}
