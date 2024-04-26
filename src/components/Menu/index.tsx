import { useEffect, useState, useRef } from "react";

import { MenuNav } from "./MenuNav";
import MenuContent from "./MenuContent";

import { useGetMenu } from "@/queries/useGetMenu";

export function Menu() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useGetMenu();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (header) {
        const headerRect = header.getBoundingClientRect();
        setIsHeaderVisible(
          headerRect.bottom > 0 && headerRect.top < window.innerHeight,
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <div ref={headerRef} />
      {!isHeaderVisible && (
        <div className="fixed left-0 right-0 top-0 z-50 bg-paper">
          <MenuNav data={data} />
        </div>
      )}
      <MenuContent data={data} />
    </div>
  );
}
