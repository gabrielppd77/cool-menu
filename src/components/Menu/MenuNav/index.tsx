import { useState, useEffect, useRef, LegacyRef } from "react";

import { MenuDataType } from "@/app/api/route";

import { motion } from "framer-motion";
import NavItem from "./NavItem";

interface MenuNavProps {
  data: MenuDataType[];
}

export function MenuNav({ data }: MenuNavProps) {
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

  return (
    <motion.div
      ref={refNav}
      className="flex h-10 items-center overflow-hidden border-b px-2"
    >
      <motion.div
        className="flex h-full w-max items-center gap-4 whitespace-nowrap"
        drag="x"
        dragConstraints={{
          right: 0,
          left: -navWidth,
        }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      >
        {data.map((d, index) => (
          <NavItem key={index} title={d.categoryName} link={"#" + d.link} />
        ))}
      </motion.div>
    </motion.div>
  );
}
