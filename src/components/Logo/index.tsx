import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="#/" className="text-text flex items-center gap-2 font-bold">
      <Image alt="icon-meal-top" src="/meal.jpeg" height={40} width={40} />
      Lili Grill
    </Link>
  );
}
