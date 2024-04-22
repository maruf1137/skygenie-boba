// pages/api/chats.ts
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Chat = {
  id: number;
  dateTime: Date;
  name: string;
  text: string;
  data: object;
};

const filePath = path.join(process.cwd(), "chatData.json");

const getChatData = () => {
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents) as Chat[];
};

const saveChatData = (chatData: Chat[]) => {
  fs.writeFileSync(filePath, JSON.stringify(chatData, null, 2));
};

let data: Chat[] = [
  {
    id: 0,
    dateTime: new Date(),
    name: "SkyGenie",
    text: "Hello, welcome! I’m SkyGenie, I can help you place your order today.",
    data: {},
  },
  {
    id: 1,
    dateTime: new Date(),
    name: "",
    text: "May I have two boba milk tea?",
    data: {},
  },
  {
    id: 2,
    dateTime: new Date(),
    name: "SkyGenie",
    text: "Sure! What kind of flavor do you like? \n We have matcha oolong, brown sugar and oolong.",
    data: {},
  },
  {
    id: 3,
    dateTime: new Date(),
    name: "",
    text: "Maybe just brown sugar.",
    data: {},
  },
  {
    id: 4,
    dateTime: new Date(),
    name: "SkyGenie",
    text: "Which size do you prefer? And any adjustments or preferences?",
    data: {},
  },
  {
    id: 5,
    dateTime: new Date(),
    name: "",
    text: "Normal size, no ice but extra boba.",
    data: {},
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Chat[]>
) {
  if (req.method === "POST") {
    const { message } = req.body;

    const newMessage: Chat = {
      id: data.length,
      dateTime: new Date(),
      name: "", // You can set a default name or fetch it from the request
      text: message,
      data: {},
    };

    data = [...data, newMessage];

    saveChatData(data);

    res.status(200).json(data);
  } else if (req.method === "GET") {
    res.status(200).json(data);
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
