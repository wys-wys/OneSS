import {NextApiRequest, NextApiResponse} from "next";

import musicJson from '@/public/exp/video.json'


const video = async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(musicJson)
}
export default video