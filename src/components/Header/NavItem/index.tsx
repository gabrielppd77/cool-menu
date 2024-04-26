import Link from "next/link";

interface NavItemProps {
  label: string;
}

export function NavItem({ label }: NavItemProps) {
  return (
    <Link className="font-bold text-primary duration-200" href="/">
      {label}
    </Link>
  );
}
