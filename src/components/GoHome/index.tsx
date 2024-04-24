import { useEffect, useState } from "react";
import Link from "next/link";
import { CircleArrowUp } from "lucide-react";

export function GoHome() {
  const [isVisibleButtonGoTop, setVisibleButtonGoTop] = useState(false);

  useEffect(() => {
    const toggleButtonTopVisible = () => {
      window.scrollY > 300
        ? setVisibleButtonGoTop(true)
        : setVisibleButtonGoTop(false);
    };

    window.addEventListener("scroll", toggleButtonTopVisible);

    return () => {
      window.removeEventListener("scroll", toggleButtonTopVisible);
    };
  }, []);

  if (!isVisibleButtonGoTop) {
    return <></>;
  }

  return (
    <Link href="/#home">
      <CircleArrowUp className="fixed bottom-4 right-4 size-8 animate-pulse" />
    </Link>
  );
}
