import { NextResponse } from "next/server";

export interface ProductType {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface MenuDataType {
  id: string;
  name: string;
  products: ProductType[];
}

const data: MenuDataType[] = [
  {
    id: "4482474e-4bdb-4773-b7ef-fd056a6ebacb",
    name: "ESPECIAL DA CASA",
    products: [
      {
        id: "25cd5d17-380f-4565-808c-c5f13a192fa7",
        name: "CARNE DE LATA",
        description: "CARNE DE PORCO, ARROZ, FEIJÃO, COUVE, MANDIOCA E BATATA.",
        imageUrl:
          "https://lh3.google.com/u/0/d/1jlfUfQKBYyL7ttQbnJPfWWxwlv0lb30-=w1278-h918-iv1",
        price: 49.9,
      },
    ],
  },
  {
    id: "99eb425c-4c6a-40f2-9d11-8c7ce04884e8",
    name: "PRATOS EXECUTIVOS",
    products: [
      {
        id: "dc623a03-c49e-40bc-a6a0-55570596aa18",
        name: "CARNE",
        description: "FILÉ DE FRANGO ALCATRA LOMBO TILÁPIA.",
        imageUrl: "/beef.svg",
        price: 0,
      },
    ],
  },
  {
    id: "86961993-a2ac-46f4-af81-8baea90e6be2",
    name: "JANTAR",
    products: [
      {
        id: "973bc171-731c-4cbf-8bc6-74d6872bb20e",
        name: "TROPEIRO",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1y88iB8k7O1f18ZjkGlkuZTTTPe0Yjxg6=w1278-h918-iv1",
        price: 0,
      },
      {
        id: "021e25f6-7883-432c-ab14-1dfed8810d48",
        name: "MACARRÃO À BOLONHESA",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1b301tbhWCa6xi0FZftlOszeZi8YuBODP=w1090-h831-iv1",
        price: 0,
      },
      {
        id: "5aaad1d6-a7ed-4c2a-a8f7-ee71a1ae8290",
        name: "BATATA RECHEADA COM PRESUNTO E MUSSARELA",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1MVsla71IwFeBqWJmc14FrBQbfAGn7uqV=w1090-h831-iv1",
        price: 0,
      },
      {
        id: "eb99e2c3-9dce-49f4-80d0-71dcbd24fcc1",
        name: "BATATA RECHEADA DE FRANGO COM BACON",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1HistM8TOHw503ydCQFlI5C0UippWOWfB=w1090-h831-iv1",
        price: 0,
      },
    ],
  },
  {
    id: "13d82058-a8ef-4d1d-a465-a2b8b760219e",
    name: "PORÇÕES",
    products: [
      {
        id: "13c7003d-b205-4980-8125-f8d5774140f2",
        name: "BARCA",
        description:
          "LINGUIÇA DE PERNIL, CONTRAFILÉ, PERNIL, BATATA FRITA E MANDIOCA.",
        imageUrl: "/beef.svg",
        price: 89.9,
      },
      {
        id: "8f48e3da-8c91-41b8-8021-7214acd559f5",
        name: "TRIO MINEIRO",
        description: "TOUCINHO COM CARNE, LINGUIÇA DEPERNIL E MANDIOCA.",
        imageUrl: "/beef.svg",
        price: 69.9,
      },
    ],
  },
  {
    id: "eaecb88e-f48f-4294-a5e6-9bad69d5b938",
    name: "SOBREMESAS",
    products: [
      {
        id: "755c2053-70ce-40e0-a8d0-a13fb910b959",
        name: "BANOFFEE",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1KSyTE13Nn5wLoiJGnwLWMOqmn0DFYhZJ=w1090-h831-iv1",
        price: 0,
      },
      {
        id: "31689345-b38b-47d3-89b9-f4f58bd08a5c",
        name: "PUDIM",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1MEFGT2PJFQew7NrSQ4aficMDShNJRqU1=w1090-h831-iv1",
        price: 0,
      },
      {
        id: "2fd05975-ba8f-4c48-b261-29c5a6b9dfa1",
        name: "PAVÊ",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/1sRRGE0WHNHjt0x7FGqnPGX-ov_v-EpV3=w1090-h831-iv1",
        price: 0,
      },
      {
        id: "84548f76-d442-41ed-9f46-3949b6b02e70",
        name: "SORVETE DE CHOCOLATE COM CALDA DE CHOCOLATE",
        description: "",
        imageUrl:
          "https://lh3.google.com/u/0/d/13BlESlQP2_pimIWVZzU6eOao7rnS2_Mm=w1090-h831-iv1",
        price: 0,
      },
    ],
  },
  {
    id: "963aa024-3054-4873-bb70-283a478595b2",
    name: "CAFÉ DA MANHÃ",
    products: [
      {
        id: "3b177c8d-b223-49d3-8843-18d403673a03",
        name: "COMBO LILI GRILL",
        description: "",
        imageUrl: "/beef.svg",
        price: 0,
      },
      {
        id: "d1729ae5-2983-4167-8260-a3c3af8fb737",
        name: "MISTO QUENTE",
        description: "",
        imageUrl: "/beef.svg",
        price: 0,
      },
      {
        id: "a31ea1d6-43a7-4d9c-8740-60280c151f8a",
        name: "FATIA, BOLO DO DIA",
        description: "",
        imageUrl: "/beef.svg",
        price: 0,
      },
    ],
  },
  {
    id: "5806805a-6e7f-400f-80c9-99f779f1bf6a",
    name: "DRINKS",
    products: [
      {
        id: "6c1875b9-c857-4d2f-bfb1-97f2d076ca02",
        name: "GIN&GRILL",
        description: "Gym, água tônica, especiariase gelo.",
        imageUrl: "/beef.svg",
        price: 20,
      },
      {
        id: "94d6e9f8-98bf-4f56-8835-195666e2639d",
        name: "PARRILA RED",
        description: "Gym, água tônica, morango e gelo.",
        imageUrl: "/beef.svg",
        price: 20,
      },
      {
        id: "5be68be4-f833-4615-8ef5-383924c21bff",
        name: "GRELHADO MOJITO",
        description: "Rum branco, limão, açúcar, hortelã, soda e gelo.",
        imageUrl: "/beef.svg",
        price: 16.9,
      },
    ],
  },
  {
    id: "0536c239-811a-44a4-bdc7-de946228702a",
    name: "BEBIDAS",
    products: [
      {
        id: "eefce2e8-0492-4452-a0ec-2b1e5a2fcf35",
        name: "ÁGUA MINERAL SEM GÁS",
        description: "500ML",
        imageUrl: "/beef.svg",
        price: 2.5,
      },
      {
        id: "837d79b6-d02b-477b-ae95-2b07b7a13e74",
        name: "ÁGUA MINERAL COM GÁS",
        description: "500ML",
        imageUrl: "/beef.svg",
        price: 3,
      },
      {
        id: "635c63f0-51f9-4dab-a63a-1e8293b16003",
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
