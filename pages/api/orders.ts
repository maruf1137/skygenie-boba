// pages/api/orders.ts
import type { NextApiRequest, NextApiResponse } from "next";

type Order = {
  id: number;
  name: string;
  properties: {
    size: "normal" | "large";
    ice: "normal" | "less" | "no";
    sugar: "normal" | "75%" | "50%" | "25%" | "no";
    boba_type?: "mango" | "strawberry";
    milk_substitution?: "normal" | "lactaid" | "oat milk";
    boba?: "normal" | "extra" | "less" | "no";
  };
  price: number;
  amount: number;
  data?: object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Order[]>
) {
  // init the data with 3 orders
  const data: Order[] = [
    {
      id: 0,
      name: "Brown Sugar Boba Milk Tea",
      properties: {
        size: "normal",
        ice: "no",
        sugar: "normal",
        boba: "extra",
      },
      price: 10,
      amount: 2,
    },
    {
      id: 1,
      name: "Strawberry Lime Green Tea",
      properties: {
        size: "large",
        ice: "less",
        sugar: "50%",
      },
      price: 5.8,
      amount: 1,
    },
    {
      id: 2,
      name: "Jasmine Green Tea Whit Honeycomb",
      properties: {
        size: "normal",
        ice: "no",
        sugar: "50%",
      },
      price: 5,
      amount: 1,
    },
  ];
  res.status(200).json(data);
}
