import clsx from "clsx";

import { MenuDataType } from "@/app/api/route";

export const categoryParam = "categoryId";

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
  function onClickItem(
    id: string,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    setCategorySelected(id);

    e.currentTarget.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }, 100);
  }

  return (
    <div className="fixed left-0 right-0 top-0 border-b-2 bg-paper">
      <div className="h-14 p-2.5"></div>
      <nav className="flex cursor-default overflow-hidden whitespace-nowrap">
        {data.map((d) => (
          <div key={d.id}>
            <div
              onClick={(e) => onClickItem(d.id, e)}
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
      </nav>
    </div>
  );

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (refNav.current) {
  //       setNavWidth(refNav.current?.scrollWidth - refNav.current?.offsetWidth);
  //     }
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const header = headerRef.current;
  //     if (header) {
  //       const headerRect = header.getBoundingClientRect();
  //       setIsHeaderVisible(
  //         headerRect.bottom > 0 && headerRect.top < window.innerHeight,
  //       );
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // return (
  //   <div className="fixed left-0 right-0 top-0 z-50 bg-paper">
  //     <motion.div
  //       ref={refNav}
  //       className="flex h-10 w-max items-center overflow-hidden border-b px-2"
  //     >
  //       <motion.div
  //         className="flex h-full w-max items-center gap-4 whitespace-nowrap"
  //         drag="x"
  //         dragConstraints={{
  //           right: 0,
  //           left: -navWidth,
  //         }}
  //         dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
  //       >
  //         {data.map((d, index) => (
  //           <NavItem
  //             key={index}
  //             label={d.name}
  //             isSelected={selected === index}
  //             onClick={() => onClickItem(index)}
  //           />
  //         ))}
  //       </motion.div>
  //     </motion.div>
  //   </div>
  // );
}
