import Image from "next/image";

interface ProductProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export function Product({ name, description, price, imageUrl }: ProductProps) {
  return (
    <div className="flex h-60 w-full justify-between gap-4 rounded border p-4">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="font-bold">{name}</h1>
          <h2>{description}</h2>
        </div>
        <div>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </div>
      <Image
        className="border"
        alt={"product:" + name}
        src={imageUrl}
        height={240}
        width={240}
        loader={() => imageUrl}
        unoptimized
      />
    </div>
  );
}
