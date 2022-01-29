import axios from "axios";

import baseSetting from "@/setting/baseSetting"
import getToken from "@/script/get_token";


export default async function getChildrenByRoute(user: string, route: string = '') {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/root:${baseSetting.folder}${route}:/children`)

    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                select: 'name,size,id,folder,file,image,video,@microsoft.graph.downloadUrl'
            },
        })
        return res.data.value
    } catch (e) {
        return {status:404}
    }
}