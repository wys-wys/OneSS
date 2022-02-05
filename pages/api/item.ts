import axios from "axios";
import type {NextApiResponse} from 'next'

import {dataType} from "@/script/data_type";
import getToken from "@/script/get_token";
import baseSetting from "@/setting/baseSetting";


export default async (req: { query: { user: string, id: string } }, res: NextApiResponse<dataType[]>) => {
    const {'user': user, 'id': id} = req.query
    const data = await getItemById(user, id)
    res.status(200).json(data)
}

async function getItemById(user: string, id: string) {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/items/${id}`)
    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                expand: 'thumbnails',
                select: 'name,size,id,createdDateTime,lastModifiedDateTime'
            },
        })
        return res.data
    } catch (e) {
        return {status: 233}
    }
}