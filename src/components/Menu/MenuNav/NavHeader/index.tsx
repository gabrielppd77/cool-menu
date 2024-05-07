import { Logo } from "@/components/Logo";
import { useMainContext } from "@/context/MainContext";

import { ChevronLeft, Search } from "lucide-react";

import { useRouter } from "next/navigation";

export function NavHeader() {
  const router = useRouter();

  const { toggleOpenSearch } = useMainContext();

  function onClickReturn() {
    router.back();
  }

  return (
    <div className="flex h-16 items-center justify-between border-b-2 p-2.5 px-4">
      <ChevronLeft
        className="size-10 rounded-full p-2 text-primary hover:cursor-pointer hover:bg-slate-200"
        onClick={onClickReturn}
      />
      <Logo />
      <Search
        className="size-10 rounded-full p-2 text-primary hover:cursor-pointer hover:bg-slate-200"
        onClick={() => toggleOpenSearch()}
      />
    </div>
  );
}
