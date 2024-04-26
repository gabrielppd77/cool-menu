import { useEffect, useRef } from "react";

import clsx from "clsx";

interface NavItemProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function NavItem({ label, isSelected, onClick }: NavItemProps) {
  const ref = useRef<any>(null);

  // useEffect(() => {
  //   if (isSelected && ref.current) {
  //     ref.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //       inline: "center",
  //     });
  //   }
  // }, [isSelected]);

  function handleClick() {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
    onClick();
  }

  return (
    <div
      ref={ref}
      className={clsx(
        "flex h-full items-center font-bold text-primary duration-200 hover:scale-105",
        {
          ["brightness-0"]: isSelected,
        },
      )}
      onClick={handleClick}
    >
      {label}
      <div
        className={clsx(
          "mb-[200px] h-[1px] w-full bg-paper transition-colors duration-200",
          {
            ["bg-primary"]: isSelected,
          },
        )}
      />
    </div>
  );
}
