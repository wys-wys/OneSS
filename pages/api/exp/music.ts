import {NextApiRequest, NextApiResponse} from "next";

import musicJson from '@/public/exp/music.json'


const music = async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(musicJson)
}
export default music