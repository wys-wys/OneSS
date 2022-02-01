import axios from "axios";
import {NextApiResponse} from 'next'

import {dataType} from "@/script/data_type";
import getToken from "@/script/get_token";
import baseSetting from "@/setting/baseSetting";


export default async (req: { query: { user: string, id: string } }, res: NextApiResponse<dataType>) => {
    const {'user': user, 'id': id} = req.query
    const url = await getItemPreviewUrl(user, id)
    res.redirect(307, url)
}

async function getItemPreviewUrl(user: string, id: string) {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/items/${id}/preview`)
    try {
        const res = await axios.post(url, {}, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
        })
        return res.data.getUrl
    } catch (e) {
        return {status: 404}
    }
}