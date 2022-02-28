import {NextApiRequest, NextApiResponse} from "next";

import musicJson from '@/public/exp/video.json'


export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(musicJson)
}