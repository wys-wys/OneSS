import axios from "axios";

import baseSetting from "@/setting/baseSetting"
import getToken from "@/script/get_token";


export default async function getUserPhoto(userName: string, q: string) {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${userName}/drive/root/search(q='${q}')`)

    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        })

        return res.data
    } catch (e) {
        return false
    }
}