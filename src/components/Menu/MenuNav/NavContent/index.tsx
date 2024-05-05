import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { useGetMenu } from "@/queries/useGetMenu";
import { useMainContext } from "@/context/MainContext";

const PREFIX_NAV_ITEM = "nav";

export function NavContent() {
  const containerRef = useRef<any>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const { categorySelected, setCategorySelected } = useMainContext();
  const { data: _data, isLoading, isFetching } = useGetMenu();
  const data = _data || [];

  useEffect(() => {
    if (categorySelected) {
      const element = document.getElementById(
        PREFIX_NAV_ITEM + categorySelected,
      );
      if (element) {
        element.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center",
        });
      }
    }
  }, [categorySelected]);

  function handleClick(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    }
  }

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setIsDragging(true);
    setStartX(event.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (!isDragging) return;
    const x = event.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Ajuste a sensibilidade do movimento conforme necessário
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const touch = event.touches[0];
    const x = touch.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Ajuste a sensibilidade do movimento conforme necessário
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <nav
      className="cursor-default select-none overflow-hidden border-b-2"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleDragEnd}
      onTouchCancel={handleDragEnd}
    >
      <div className="flex whitespace-nowrap">
        {data.map((d) => (
          <div key={d.id} className="relative">
            <div
              id={PREFIX_NAV_ITEM + d.id}
              onClick={() => handleClick(d.id)}
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
      </div>
    </nav>
  );
}
