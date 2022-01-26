import axios from "axios";

import baseSetting from "@/setting/baseSetting"
import getToken from "@/script/get_token";


export default async function getUserPhoto(userName: string) {
    const accessToken = await getToken()
    const url = `${baseSetting.endpoints.graph_endpoint}/users/${userName}/photos/648x648/$value`

    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'image/jpg'
            },
            responseType: 'arraybuffer'
        })

        return new Buffer(res.data, 'binary').toString('base64')
    } catch (e) {
        return false
    }
}