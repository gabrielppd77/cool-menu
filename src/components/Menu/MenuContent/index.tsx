import { useGetMenu } from "@/queries/useGetMenu";
import { useMainContext } from "@/context/MainContext";
import { useEffect, useRef } from "react";

export function MenuContent() {
  const contentRef = useRef<HTMLDivElement>(null);

  const { data: _data, isLoading, isFetching } = useGetMenu();
  const data = _data || [];

  const { categorySelected, setCategorySelected } = useMainContext();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     data.forEach((category) => {
  //       const element = document.getElementById(category.id);
  //       console.log({ element });
  //       if (!element) return;
  //       const rect = element.getBoundingClientRect();
  //       console.log({ rect });
  //       const categoryCenter = rect.top + rect.height / 2; // Calcula o centro do elemento
  //       if (categoryCenter >= 0 && categoryCenter <= window.innerHeight) {
  //         setCategorySelected(category.id);
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [data]);

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      const handleScroll = () => {
        for (let index = 0; index < data.length; index++) {
          const category = data[index];
          const categoryElement = document.getElementById(category.id);
          if (categoryElement) {
            const contentTop = content.scrollTop;
            const contentBottom = contentTop + content.clientHeight;
            const categoryTop = categoryElement.offsetTop;
            const categoryBottom = categoryTop + categoryElement.clientHeight;
            if (categoryTop >= contentTop && categoryBottom <= contentBottom) {
              setCategorySelected(category.id);
              break; // Se encontrarmos uma categoria visível, podemos parar de verificar as outras
            }
          }
          // if (!element) return;
          // const rect = element.getBoundingClientRect();
          // const categoryCenter = rect.top + rect.height / 2; // Calcula o centro do elemento
          // if (categoryCenter >= 0 && categoryCenter <= window.innerHeight) {
          //   setCategorySelected(category.id);
          // }
        }
        // for (const categoryName in categoryRefs.current) {
        //   const categoryElement = categoryRefs.current[categoryName];
        //   if (categoryElement) {
        //     const containerTop = container.scrollTop;
        //     const containerBottom = containerTop + container.clientHeight;
        //     const categoryTop = categoryElement.offsetTop;
        //     const categoryBottom = categoryTop + categoryElement.clientHeight;
        //     if (categoryTop >= containerTop && categoryBottom <= containerBottom) {
        //       setVisibleCategory(categoryName);
        //       break; // Se encontrarmos uma categoria visível, podemos parar de verificar as outras
        //     }
        //   }
        // }
      };

      content.addEventListener("scroll", handleScroll);
      return () => {
        content.removeEventListener("scroll", handleScroll);
      };
    }
  }, [data]);

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
    <div className="h-[300px] overflow-auto" ref={contentRef}>
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
