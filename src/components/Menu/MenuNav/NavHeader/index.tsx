import { Logo } from "@/components/Logo";

import { ChevronLeft, Search } from "lucide-react";

import { useRouter } from "next/navigation";

export function NavHeader() {
  const router = useRouter();

  function onClickReturn() {
    router.back();
  }

  return (
    <div className="flex h-16 items-center justify-between border-b-2 p-2.5 px-4">
      <ChevronLeft className="text-primary" onClick={onClickReturn} />
      <Logo />
      <Search className="text-primary" />
    </div>
  );
}
