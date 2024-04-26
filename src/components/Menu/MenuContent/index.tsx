import { MenuDataType } from "@/app/api/route";
import { Product } from "./Product";

interface MenuContentProps {
  data: MenuDataType[];
}

export default function MenuContent({ data }: MenuContentProps) {
  return (
    <div>
      {data.map((d, index) => (
        <section key={index}>
          <div className="font-bold">{d.name}</div>
          <div>
            {d.products.map((p, index) => (
              <Product
                key={index}
                name={p.name}
                description={p.description}
                price={p.price}
                imageUrl={p.imageUrl}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
