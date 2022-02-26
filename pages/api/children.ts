import axios from "axios";
import type {NextApiResponse} from 'next'

import {itemType} from "@/script/item_type";
import getToken from "@/script/get_token";
import baseSetting from "@/setting/baseSetting";


export default async (req: { query: { user: string, route?: string } }, res: NextApiResponse<itemType[]>) => {
    const {'user': user, 'route': route} = req.query
    const data = await getChildrenByRoute(user, route ? `/${route}` : '')
    res.status(200).json(data)
}

async function getChildrenByRoute(user: string, route: string = '') {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/root:${baseSetting.folder}${route}:/children`)

    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                select: 'name,size,id,folder,file,image,video,createdBy'
            },
        })
        return res.data.value
    } catch (e) {
        return {status: 233}
    }
}