import {NextApiRequest, NextApiResponse} from "next";
import userList from "@/setting/userList";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(userList)
}