import { useEffect } from "react";

import { useGetMenu } from "@/queries/useGetMenu";
import { useMainContext } from "@/context/MainContext";

import { HEIGHT_NAV_HEADER } from "..";
import { Product } from "./Product";

export function MenuContent() {
  const { data: _data, isLoading, isFetching } = useGetMenu();
  const data = _data || [];

  const { isCategoryClicked, setCategoryClicked, setCategorySelected } =
    useMainContext();

  useEffect(() => {
    const handleScroll = () => {
      if (isCategoryClicked) return;
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

    function handleScrollEnd() {
      setCategoryClicked(false);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scrollend", handleScrollEnd);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isCategoryClicked]);

  return (
    <div>
      {!_data && <>Carregando...</>}
      {data.map((d) => (
        <section key={d.id} id={d.id}>
          <div className="font-bold">{d.name}</div>
          <div>
            {d.products.map(({ id, name, description, imageUrl, price }) => (
              <Product
                key={id}
                name={name}
                description={description}
                imageUrl={imageUrl}
                price={price}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
