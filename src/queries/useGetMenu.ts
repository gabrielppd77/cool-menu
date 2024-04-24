import { useEffect, useState } from "react";

import { MenuDataType } from "@/app/api/route";

export function useGetMenu() {
  const [data, setData] = useState<MenuDataType[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const response = await fetch("/api", {
          headers: {
            Accept: "application/json",
            method: "GET",
          },
        });

        if (response) {
          const data = await response.json();
          setData(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return {
    data,
    isLoading,
  };
}
