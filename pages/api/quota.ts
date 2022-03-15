import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";

import getToken from "@/script/get_token";
import baseSetting from "@/setting/baseSetting";


const quota = async (req: NextApiRequest, res: NextApiResponse) => {
    const {'user': user} = req.query
    const data = await getDriveQuota(user as string)
    res.status(200).json(data)
}
export default quota

async function getDriveQuota(user: string) {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive`)
    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                select: 'quota'
            },
        })
        return res.data["quota"]
    } catch (e) {
        return {status: 233}
    }
}