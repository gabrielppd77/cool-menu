import { MenuDataType } from "@/app/api/route";
import { useQuery } from "@tanstack/react-query";

export const queryGetMenu = "get-menu";

export function useGetMenu() {
  async function handleRequest() {
    const response = await fetch("/api", {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    });
    if (response) {
      const data: MenuDataType[] = await response.json();
      return data;
    }
    return [];
  }

  return useQuery({
    queryKey: [queryGetMenu],
    queryFn: handleRequest,
  });
}
