import {NextApiRequest, NextApiResponse} from "next";

import musicJson from '@/public/exp/music.json'


export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(musicJson)
}