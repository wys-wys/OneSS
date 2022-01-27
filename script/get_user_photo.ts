import axios from "axios";

import baseSetting from "@/setting/baseSetting"
import getToken from "@/script/get_token";


export default async function getUserPhoto(userName: string) {
    const accessToken = await getToken()
    const url = `${baseSetting.endpoints.graph_endpoint}/users/${userName}/photos/64x64/$value`

    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'image/jpg'
            },
            responseType: 'arraybuffer'
        })

        return Buffer.from(res.data, 'binary').toString('base64')
    } catch (e) {
        return false
    }
}