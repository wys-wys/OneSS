import axios from "axios";
import type {NextApiRequest, NextApiResponse} from 'next'

import {dataType} from "@/script/data_type";
import getToken from "@/script/get_token";
import baseSetting from "@/setting/baseSetting";
import userList from "@/setting/userList";


export default async (req: NextApiRequest, res: NextApiResponse<dataType[]>) => {
    let data: dataType[] = []
    for (let i of userList) {
        let eachData = await getVideo(i)
        eachData.status != 404 && (data = data.concat(eachData))
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
        return {status: 404}
    }
}