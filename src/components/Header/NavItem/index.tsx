import Link from "next/link";

interface NavItemProps {
  link: string;
  label: string;
}

export function NavItem({ label, link }: NavItemProps) {
  return (
    <Link className="text-primary font-bold duration-200" href={link}>
      {label}
    </Link>
  );
}
