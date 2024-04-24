import { MenuDataType } from "@/app/api/route";

interface MenuNavProps {
  data: MenuDataType[];
}

export function MenuNav({ data }: MenuNavProps) {
  return (
    <nav className="flex gap-4 whitespace-nowrap p-1">
      {data.map((d, index) => (
        <div key={index}>{d.categoryName}</div>
        // <NavItem key={index} title={d.categoryName} link={"#" + d.link} />
      ))}
    </nav>
  );
}
