import axios from "axios";
import type {NextApiRequest, NextApiResponse} from 'next'

import {itemType} from "@/script/item_type";
import getToken from "@/script/get_token";
import baseSetting from "@/setting/baseSetting";
import userList from "@/setting/userList";


export default async (req: NextApiRequest, res: NextApiResponse<itemType[]>) => {
    let data: itemType[] = []
    for (let user of userList) {
        let eachData = await getVideo(user)
        eachData.status != 233 && (data = data.concat(eachData))
    }
    res.status(200).json(data)
}

async function getVideo(user: string) {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/root:${baseSetting.folder}/Video:/children`)
    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                expand: 'thumbnails',
                select: 'name,id,video,createdBy'
            },
        })
        return res.data.value
    } catch (e) {
        return {status: 233}
    }
}