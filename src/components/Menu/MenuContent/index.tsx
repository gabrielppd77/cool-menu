import { useEffect } from "react";

import { useGetMenu } from "@/queries/useGetMenu";
import { useMainContext } from "@/context/MainContext";

const HEIGHT_NAV_HEADER = 112;

export function MenuContent() {
  const { data: _data, isLoading, isFetching } = useGetMenu();
  const data = _data || [];

  const { setCategorySelected } = useMainContext();

  useEffect(() => {
    const handleScroll = () => {
      for (let index = 0; index < data.length; index++) {
        const category = data[index];
        const categoryElement = document.getElementById(category.id);
        if (categoryElement) {
          let { top } = categoryElement.getBoundingClientRect();
          let { innerHeight } = window;

          top -= HEIGHT_NAV_HEADER;
          innerHeight = (innerHeight - HEIGHT_NAV_HEADER) / 2;

          if (top > 0 && top < innerHeight) {
            setCategorySelected(category.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div>
      {!_data && <>Carregando...</>}
      {data.map((d) => (
        <section key={d.id} id={d.id}>
          <div className="font-bold">{d.name}</div>
          <div>
            {d.products.map((p) => (
              <div key={p.id} className="h-32 w-full bg-green-200">
                {p.name}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
