import axios from "axios";
import type {NextApiResponse} from 'next'

import {itemType} from "@/script/data_type";
import getToken from "@/script/get_token";
import baseSetting from "../../setting/baseSetting";
import userList from "../../setting/userList";


const route = async (req: { query: { p: string } }, res: NextApiResponse<itemType[]>) => {
    const {'p': route} = req.query
    let data: itemType[] = []
    for (let user of userList.users) {
        let eachData = await getByRoute(user, route)
        eachData.status != 233 && (data = data.concat(eachData))
    }
    res.status(200).json(data)
}
export default route

async function getByRoute(user: string, route: string) {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/root:${baseSetting.folder}/${route}:/children`)
    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                expand: 'thumbnails',
                select: 'name,size,id,folder,file,image,video,createdBy'
            },
        })
        return res.data.value
    } catch (e) {
        return {status: 233}
    }
}