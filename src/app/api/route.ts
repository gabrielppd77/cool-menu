import { NextResponse } from "next/server";

export interface ProductType {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface MenuDataType {
  categoryName: string;
  imageUrl: string;
  link: string;
  products: ProductType[];
}

const data: MenuDataType[] = [
  {
    categoryName: "ESPECIAL DA CASA",
    link: "especial-da-casa",
    imageUrl: "/utensils.svg",
    products: [
      {
        title: "CARNE DE LATA",
        description: "CARNE DE PORCO, ARROZ, FEIJÃO, COUVE, MANDIOCA E BATATA.",
        imageUrl:
          "https://lh3.google.com/u/0/d/1jlfUfQKBYyL7ttQbnJPfWWxwlv0lb30-=w1278-h918-iv1",
        price: 49.9,
      },
    ],
  },
  {
    categoryName: "PRATOS EXECUTIVOS",
    link: "pratos-executivos",
    imageUrl: "/utensils.svg",
    products: [
      {
        title: "CARNE",
        description: "FILÉ DE FRANGO ALCATRA LOMBO TILÁPIA.",
        imageUrl: "/beef.svg",
        price: 0,
      },
    ],
  },
  {
    categoryName: "JANTAR",
    link: "jantar",
    imageUrl: "/utensils.svg",
    products: [
      {
        title: "TROPEIRO",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1y88iB8k7O1f18ZjkGlkuZTTTPe0Yjxg6=w1278-h918-iv1",
        price: 0,
      },
      {
        title: "MACARRÃO À BOLONHESA",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1b301tbhWCa6xi0FZftlOszeZi8YuBODP=w1090-h831-iv1",
        price: 0,
      },
      {
        title: "BATATA RECHEADA COM PRESUNTO E MUSSARELA",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1MVsla71IwFeBqWJmc14FrBQbfAGn7uqV=w1090-h831-iv1",
        price: 0,
      },
      {
        title: "BATATA RECHEADA DE FRANGO COM BACON",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1HistM8TOHw503ydCQFlI5C0UippWOWfB=w1090-h831-iv1",
        price: 0,
      },
    ],
  },
  {
    categoryName: "PORÇÕES",
    link: "porcoes",
    imageUrl: "/utensils.svg",
    products: [
      {
        title: "BARCA",
        description:
          "LINGUIÇA DE PERNIL, CONTRAFILÉ, PERNIL, BATATA FRITA E MANDIOCA.",
        imageUrl: "/beef.svg",
        price: 89.9,
      },
      {
        title: "TRIO MINEIRO",
        description: "TOUCINHO COM CARNE, LINGUIÇA DEPERNIL E MANDIOCA.",
        imageUrl: "/beef.svg",
        price: 69.9,
      },
    ],
  },
  {
    categoryName: "SOBREMESAS",
    link: "sobremesas",
    imageUrl: "/utensils.svg",
    products: [
      {
        title: "BANOFFEE",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1KSyTE13Nn5wLoiJGnwLWMOqmn0DFYhZJ=w1090-h831-iv1",
        price: 0,
      },
      {
        title: "PUDIM",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1MEFGT2PJFQew7NrSQ4aficMDShNJRqU1=w1090-h831-iv1",
        price: 0,
      },
      {
        title: "PAVÊ",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1sRRGE0WHNHjt0x7FGqnPGX-ov_v-EpV3=w1090-h831-iv1",
        price: 0,
      },
      {
        title: "SORVETE DE CHOCOLATE COM CALDA DE CHOCOLATE",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/13BlESlQP2_pimIWVZzU6eOao7rnS2_Mm=w1090-h831-iv1",
        price: 0,
      },
    ],
  },
  {
    categoryName: "CAFÉ DA MANHÃ",
    link: "cafe-da-manha",
    imageUrl: "/utensils.svg",
    products: [
      {
        title: "COMBO LILI GRILL",
        description: "",
        imageUrl: "/beef.svg",
        price: 0,
      },
      {
        title: "MISTO QUENTE",
        description: "",
        imageUrl: "/beef.svg",
        price: 0,
      },
      {
        title: "FATIA, BOLO DO DIA",
        description: "",
        imageUrl: "/beef.svg",
        price: 0,
      },
    ],
  },
  {
    categoryName: "DRINKS",
    link: "drinks",
    imageUrl: "/utensils.svg",
    products: [
      {
        title: "GIN&GRILL",
        description: "Gym, água tônica, especiariase gelo.",
        imageUrl: "/beef.svg",
        price: 20,
      },
      {
        title: "PARRILA RED",
        description: "Gym, água tônica, morango e gelo.",
        imageUrl: "/beef.svg",
        price: 20,
      },
      {
        title: "GRELHADO MOJITO",
        description: "Rum branco, limão, açúcar, hortelã, soda e gelo.",
        imageUrl: "/beef.svg",
        price: 16.9,
      },
    ],
  },
  {
    categoryName: "BEBIDAS",
    link: "bebidas",
    imageUrl: "/utensils.svg",
    products: [
      {
        title: "ÁGUA MINERAL SEM GÁS",
        description: "500ML",
        imageUrl: "/beef.svg",
        price: 2.5,
      },
      {
        title: "ÁGUA MINERAL COM GÁS",
        description: "500ML",
        imageUrl: "/beef.svg",
        price: 3,
      },
      {
        title: "ÁGUA TÔNICA",
        description: "350ML",
        imageUrl: "/beef.svg",
        price: 5,
      },
    ],
  },
];

export async function GET() {
  return NextResponse.json(data);
}
