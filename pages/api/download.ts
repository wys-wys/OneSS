import axios from "axios";
import {NextApiResponse} from "next";

import {dataType} from "@/script/data_type";
import getToken from "@/script/get_token";
import baseSetting from "@/setting/baseSetting";

export default async (req: { query: { user: string, id: string } }, res: NextApiResponse<dataType>) => {
    const {'user': user, 'id': id} = req.query
    const url = await getDownload(user, id)
    res.redirect(307, url)
}

async function getDownload(user: string, id: string) {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/items/${id}`)
    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                select: '@microsoft.graph.downloadUrl'
            },
        })
        return res.data['@microsoft.graph.downloadUrl']
    } catch (e) {
        return {status: 404}
    }
}