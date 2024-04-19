import { NextResponse } from "next/server";

export interface MenuItemType {
  title: string;
  description: string;
  imageUrl: string;
  value: number;
}

export interface MenuDataType {
  categoryName: string;
  imageUrl: string;
  items: MenuItemType[];
}

const data: MenuDataType[] = [
  {
    categoryName: "ESPECIAL DA CASA",
    imageUrl: "",
    items: [
      {
        title: "CARNE DE LATA",
        description: "CARNE DE PORCO, ARROZ, FEIJÃO, COUVE, MANDIOCA E BATATA.",
        imageUrl: "",
        value: 49.9,
      },
    ],
  },
  {
    categoryName: "PRATOS EXECUTIVOS",
    imageUrl: "",
    items: [
      {
        title: "CARNE",
        description: "FILÉ DE FRANGO ALCATRA LOMBO TILÁPIA.",
        imageUrl: "",
        value: 0,
      },
    ],
  },
  {
    categoryName: "JANTAR",
    imageUrl: "",
    items: [
      {
        title: "TROPEIRO",
        description: "",
        imageUrl: "",
        value: 0,
      },
      {
        title: "MACARRÃO À BOLONHESA",
        description: "",
        imageUrl: "",
        value: 0,
      },
      {
        title: "BATATA RECHEADA COM PRESUNTO E MUSSARELA",
        description: "",
        imageUrl: "",
        value: 0,
      },
      {
        title: "BATATA RECHEADA DE FRANGO COM BACON",
        description: "",
        imageUrl: "",
        value: 0,
      },
    ],
  },
  {
    categoryName: "PORÇÕES",
    imageUrl: "",
    items: [
      {
        title: "BARCA",
        description:
          "LINGUIÇA DE PERNIL, CONTRAFILÉ, PERNIL, BATATA FRITA E MANDIOCA.",
        imageUrl: "",
        value: 89.9,
      },
      {
        title: "TRIO MINEIRO",
        description: "TOUCINHO COM CARNE, LINGUIÇA DEPERNIL E MANDIOCA.",
        imageUrl: "",
        value: 69.9,
      },
    ],
  },
  {
    categoryName: "SOBREMESAS",
    imageUrl: "",
    items: [
      {
        title: "BANOFFEE",
        description: "",
        imageUrl: "",
        value: 0,
      },
      {
        title: "PUDIM",
        description: "",
        imageUrl: "",
        value: 0,
      },
      {
        title: "PAVÊ",
        description: "",
        imageUrl: "",
        value: 0,
      },
      {
        title: "SORVETE DE CHOCOLATE COM CALDA DE CHOCOLATE",
        description: "",
        imageUrl: "",
        value: 0,
      },
    ],
  },
  {
    categoryName: "CAFÉ DA MANHÃ",
    imageUrl: "",
    items: [
      {
        title: "COMBO LILI GRILL",
        description: "",
        imageUrl: "",
        value: 0,
      },
      {
        title: "MISTO QUENTE",
        description: "",
        imageUrl: "",
        value: 0,
      },
      {
        title: "FATIA, BOLO DO DIA",
        description: "",
        imageUrl: "",
        value: 0,
      },
    ],
  },
  {
    categoryName: "DRINKS",
    imageUrl: "",
    items: [
      {
        title: "GIN&GRILL",
        description: "Gym, água tônica, especiariase gelo.",
        imageUrl: "",
        value: 20,
      },
      {
        title: "PARRILA RED",
        description: "Gym, água tônica, morango e gelo.",
        imageUrl: "",
        value: 20,
      },
      {
        title: "GRELHADO MOJITO",
        description: "Rum branco, limão, açúcar, hortelã, soda e gelo.",
        imageUrl: "",
        value: 16.9,
      },
    ],
  },
  {
    categoryName: "BEBIDAS",
    imageUrl: "",
    items: [
      {
        title: "ÁGUA MINERAL SEM GÁS",
        description: "500ML",
        imageUrl: "",
        value: 2.5,
      },
      {
        title: "ÁGUA MINERAL COM GÁS",
        description: "500ML",
        imageUrl: "",
        value: 3,
      },
      {
        title: "ÁGUA TÔNICA",
        description: "350ML",
        imageUrl: "",
        value: 5,
      },
    ],
  },
];

export async function GET() {
  return NextResponse.json(data);
}
