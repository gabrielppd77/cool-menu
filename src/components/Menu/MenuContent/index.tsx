import { MenuDataType } from "@/app/api/route";

interface MenuContentProps {
  data: MenuDataType[];
}

export function MenuContent({ data }: MenuContentProps) {
  return (
    <div>
      {data.map((d) => (
        <section key={d.id} id={d.id}>
          <div className="font-bold">{d.name}</div>
          <div>
            {d.products.map((p) => (
              <div key={p.id} className="h-32 w-full bg-green-200">
                {p.name}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
