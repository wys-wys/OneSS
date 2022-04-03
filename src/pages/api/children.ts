import axios from "axios";
import type {NextApiResponse} from 'next'

import {itemType} from "@/script/data_type";
import getToken from "@/script/get_token";
import baseSetting from "@/setting/baseSetting";


let totalData: any[] = []

const children = async (req: { query: { user: string, route?: string, thumbnails?: boolean } }, res: NextApiResponse<itemType[]>) => {
    const {'user': user, 'route': route, 'thumbnails': thumbnails = false} = req.query
    const accessToken = await getToken()
    const data = await getChildrenByRoute(user, route ? `/${route}` : '', thumbnails, accessToken)
    await getNextData(data, accessToken)
    if (totalData) {
        const resData = data.value.concat(totalData)
        totalData = []
        res.status(200).json(resData)
    } else {
        const resData = data.value
        totalData = []
        res.status(200).json(resData)
    }
    res.status(200).json(data.value)
}
export default children

async function getNextData(data: any, accessToken: string) {
    const nextUrl = data['@odata.nextLink']
    if (nextUrl) {
        const res = await axios.get(nextUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
        })
        totalData = totalData.concat(res.data.value)
        await getNextData(res.data, accessToken)
    } else {
        return totalData
    }
}

async function getChildrenByRoute(user: string, route: string = '', thumbnails: boolean, accessToken: string) {
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/root:${baseSetting.folder}${route}:/children`)

    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                expand: `${thumbnails ? 'thumbnails' : ''}`,
                select: 'name,size,id,folder,file,image,video',
            },
        })
        return res.data
    } catch (e) {
        return {status: 233}
    }
}