import axios from "axios";

import baseSetting from "@/setting/baseSetting"
import getToken from "@/script/get_token";


export default async function getItemById(user: string, id: string) {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/items/${id}?$expand=thumbnails`)

    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                select: 'name,size,id,createdDateTime,lastModifiedDateTime,@microsoft.graph.downloadUrl'
            },
        })
        return res.data
    } catch (e) {
        return false
    }
}