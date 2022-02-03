import {NextApiRequest, NextApiResponse} from "next";
import userList from "@/setting/userList";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const user = userList
    res.status(200).json(user)
}