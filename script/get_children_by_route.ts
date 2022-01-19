import axios from "axios";

import baseSetting from "../setting/baseSetting"


async function getToken() {
    const res = await axios.post(baseSetting.endpoints.token_endpoint, new URLSearchParams(baseSetting.authorization), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    return res.data.access_token
}


export async function getChildrenByRoute(route: string, user: string) {
    const accessToken = await getToken()
    const url = `${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/root:/${baseSetting.folder}${route}:/children`

    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                select: 'name,size,id,folder,file'
            },
        })
        return res.data.value
    } catch (e) {
        return 404
    }
}

export default getChildrenByRoute