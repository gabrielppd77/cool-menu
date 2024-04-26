import { NextResponse } from "next/server";

export interface ProductType {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface MenuDataType {
  name: string;
  products: ProductType[];
}

const data: MenuDataType[] = [
  {
    name: "ESPECIAL DA CASA",
    products: [
      {
        name: "CARNE DE LATA",
        description: "CARNE DE PORCO, ARROZ, FEIJÃO, COUVE, MANDIOCA E BATATA.",
        imageUrl:
          "https://lh3.google.com/u/0/d/1jlfUfQKBYyL7ttQbnJPfWWxwlv0lb30-=w1278-h918-iv1",
        price: 49.9,
      },
    ],
  },
  {
    name: "PRATOS EXECUTIVOS",
    products: [
      {
        name: "CARNE",
        description: "FILÉ DE FRANGO ALCATRA LOMBO TILÁPIA.",
        imageUrl: "/beef.svg",
        price: 0,
      },
    ],
  },
  {
    name: "JANTAR",
    products: [
      {
        name: "TROPEIRO",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1y88iB8k7O1f18ZjkGlkuZTTTPe0Yjxg6=w1278-h918-iv1",
        price: 0,
      },
      {
        name: "MACARRÃO À BOLONHESA",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1b301tbhWCa6xi0FZftlOszeZi8YuBODP=w1090-h831-iv1",
        price: 0,
      },
      {
        name: "BATATA RECHEADA COM PRESUNTO E MUSSARELA",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1MVsla71IwFeBqWJmc14FrBQbfAGn7uqV=w1090-h831-iv1",
        price: 0,
      },
      {
        name: "BATATA RECHEADA DE FRANGO COM BACON",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1HistM8TOHw503ydCQFlI5C0UippWOWfB=w1090-h831-iv1",
        price: 0,
      },
    ],
  },
  {
    name: "PORÇÕES",
    products: [
      {
        name: "BARCA",
        description:
          "LINGUIÇA DE PERNIL, CONTRAFILÉ, PERNIL, BATATA FRITA E MANDIOCA.",
        imageUrl: "/beef.svg",
        price: 89.9,
      },
      {
        name: "TRIO MINEIRO",
        description: "TOUCINHO COM CARNE, LINGUIÇA DEPERNIL E MANDIOCA.",
        imageUrl: "/beef.svg",
        price: 69.9,
      },
    ],
  },
  {
    name: "SOBREMESAS",
    products: [
      {
        name: "BANOFFEE",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1KSyTE13Nn5wLoiJGnwLWMOqmn0DFYhZJ=w1090-h831-iv1",
        price: 0,
      },
      {
        name: "PUDIM",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1MEFGT2PJFQew7NrSQ4aficMDShNJRqU1=w1090-h831-iv1",
        price: 0,
      },
      {
        name: "PAVÊ",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1sRRGE0WHNHjt0x7FGqnPGX-ov_v-EpV3=w1090-h831-iv1",
        price: 0,
      },
      {
        name: "SORVETE DE CHOCOLATE COM CALDA DE CHOCOLATE",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/13BlESlQP2_pimIWVZzU6eOao7rnS2_Mm=w1090-h831-iv1",
        price: 0,
      },
    ],
  },
  {
    name: "CAFÉ DA MANHÃ",
    products: [
      {
        name: "COMBO LILI GRILL",
        description: "",
        imageUrl: "/beef.svg",
        price: 0,
      },
      {
        name: "MISTO QUENTE",
        description: "",
        imageUrl: "/beef.svg",
        price: 0,
      },
      {
        name: "FATIA, BOLO DO DIA",
        description: "",
        imageUrl: "/beef.svg",
        price: 0,
      },
    ],
  },
  {
    name: "DRINKS",
    products: [
      {
        name: "GIN&GRILL",
        description: "Gym, água tônica, especiariase gelo.",
        imageUrl: "/beef.svg",
        price: 20,
      },
      {
        name: "PARRILA RED",
        description: "Gym, água tônica, morango e gelo.",
        imageUrl: "/beef.svg",
        price: 20,
      },
      {
        name: "GRELHADO MOJITO",
        description: "Rum branco, limão, açúcar, hortelã, soda e gelo.",
        imageUrl: "/beef.svg",
        price: 16.9,
      },
    ],
  },
  {
    name: "BEBIDAS",
    products: [
      {
        name: "ÁGUA MINERAL SEM GÁS",
        description: "500ML",
        imageUrl: "/beef.svg",
        price: 2.5,
      },
      {
        name: "ÁGUA MINERAL COM GÁS",
        description: "500ML",
        imageUrl: "/beef.svg",
        price: 3,
      },
      {
        name: "ÁGUA TÔNICA",
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
