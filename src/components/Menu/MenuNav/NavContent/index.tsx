import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { motion } from "framer-motion";

import { useGetMenu } from "@/queries/useGetMenu";
import { useMainContext } from "@/context/MainContext";

export function NavContent() {
  const refNav = useRef<any>(null);
  const [navWidth, setNavWidth] = useState(0);

  const { categorySelected, setCategorySelected } = useMainContext();
  const { data: _data, isLoading, isFetching } = useGetMenu();
  const data = _data || [];

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
  }

  return (
    <nav
      ref={refNav}
      className="cursor-default overflow-hidden border-b-2 px-2"
    >
      <motion.div
        className="flex whitespace-nowrap"
        drag="x"
        dragConstraints={{
          right: 0,
          left: -(navWidth + 8),
        }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      >
        {data.map((d) => (
          <div key={d.id} id={"nav" + d.id} className="relative">
            <div
              onClick={(e) => onClickItem(d.id)}
              className={clsx(
                "flex h-12 flex-col justify-center px-2.5 font-bold transition-colors duration-300",
                {
                  ["text-primary"]: categorySelected === d.id,
                  ["text-text"]: categorySelected !== d.id,
                },
              )}
            >
              <div>{d.name}</div>
            </div>

            <div
              className={clsx(
                "absolute bottom-0 left-0 right-0 h-1 rounded transition-colors duration-300",
                {
                  ["bg-primary"]: categorySelected === d.id,
                },
              )}
            />
          </div>
        ))}
      </motion.div>
    </nav>
  );
}
