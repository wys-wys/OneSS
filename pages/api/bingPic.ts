import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";


const bingPic = async (req: NextApiRequest, res: NextApiResponse) => {
    const url = await getBingPic()
    res.redirect(307, `https://www.bing.com${url}`)
}
export default bingPic

async function getBingPic() {
    const url = encodeURI("http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1")
    try {
        const res = await axios.get(url, {
            headers: {
                'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Mobile Safari/537.36'
            },
        })
        return res.data.images[0].url
    } catch (e) {
        return {status: 233}
    }
}