import { useState } from "react";

import { MenuNav } from "./MenuNav";
import { MenuContent } from "./MenuContent";

import { useGetMenu } from "@/queries/useGetMenu";

export function Menu() {
  const [categorySelected, setCategorySelected] = useState("");
  const { data, isLoading } = useGetMenu();

  return (
    <section className="rounded bg-paper p-4 shadow-lg">
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <div>
          <MenuNav
            data={data}
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
          />
          <MenuContent data={data} />
        </div>
      )}
    </section>
  );
}
