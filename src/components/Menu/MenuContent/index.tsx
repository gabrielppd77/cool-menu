import { useGetMenu } from "@/queries/useGetMenu";
import { useMainContext } from "@/context/MainContext";
import { useEffect, useRef } from "react";

export function MenuContent() {
  const { data: _data, isLoading, isFetching } = useGetMenu();
  const data = _data || [];

  const { categorySelected, setCategorySelected } = useMainContext();

  useEffect(() => {
    const handleScroll = () => {
      data.forEach((category) => {
        const element = document.getElementById(category.id);
        if (!element) return;
        const rect = element.getBoundingClientRect();
        // if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        //   setCategorySelected(category.id);
        // }

        const categoryCenter = rect.top + rect.height / 2; // Calcula o centro do elemento

        if (categoryCenter >= 0 && categoryCenter <= window.innerHeight) {
          setCategorySelected(category.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  // useEffect(() => {
  //   if (!categorySelected) return;
  //   const element = document.getElementById(categorySelected);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //       inline: "center",
  //     });
  //   }
  // }, [categorySelected]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     data.forEach((category) => {
  //       const elementCurrent = document.getElementById(category.id);
  //       if (!elementCurrent) return;
  //       const rect = elementCurrent.getBoundingClientRect();
  //       if (
  //         rect.top >= 0 &&
  //         rect.bottom <=
  //           (window.innerHeight || document.documentElement.clientHeight)
  //       ) {
  //         const element = document.getElementById("nav" + categorySelected);
  //         console.log({ element });
  //         if (element) {
  //           element.scrollIntoView({
  //             behavior: "smooth",
  //             block: "center",
  //             inline: "center",
  //           });
  //         }
  //         return;
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [data, categorySelected]);

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
