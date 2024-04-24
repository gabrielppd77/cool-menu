import { MenuDataType } from "@/app/api/route";
import { Product } from "./Product";

interface MenuContentProps {
  data: MenuDataType[];
}

export default function MenuContent({ data }: MenuContentProps) {
  return (
    <div>
      {data.map((d, index) => (
        <section key={d.link} id={d.link} className="w-full">
          {d.categoryName}
          {d.products.map((p, index) => (
            <Product
              key={index}
              title={p.title}
              description={p.description}
              price={p.price}
              imageUrl={p.imageUrl}
            />
          ))}
        </section>
      ))}
    </div>
  );
}
