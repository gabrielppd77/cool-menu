import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { useGetMenu } from "@/queries/useGetMenu";
import { useMainContext } from "@/context/MainContext";
import { HEIGHT_NAV_HEADER } from "../..";

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
        const windowWidth = containerRef.current.clientWidth;
        const elementWidth = element.offsetWidth;
        const elementLeft = element.offsetLeft;

        const scrollToPositionX =
          elementLeft - windowWidth / 2 + elementWidth / 2;

        containerRef.current.scrollTo({
          left: scrollToPositionX,
          behavior: "smooth",
        });
      }
    }
  }, [categorySelected]);

  function handleClick(id: string) {
    setCategorySelected(id);
    const element = document.getElementById(id);
    if (element) {
      const windowHeight = window.innerHeight - HEIGHT_NAV_HEADER;
      const elementHeight = element.offsetHeight;
      const elementTop = element.offsetTop - HEIGHT_NAV_HEADER;
      const scrollToPosition =
        elementTop - windowHeight / 2 + elementHeight / 2;
      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
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
      className="flex cursor-default select-none overflow-hidden whitespace-nowrap border-b-2"
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
      {data.map((d) => (
        <div key={d.id}>
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
            className={clsx("h-1 rounded transition-colors duration-300", {
              ["bg-primary"]: categorySelected === d.id,
            })}
          />
        </div>
      ))}
    </nav>
  );
}
