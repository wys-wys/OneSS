import {NextApiRequest, NextApiResponse} from "next";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.redirect(307, '/exp/music.xml')
}