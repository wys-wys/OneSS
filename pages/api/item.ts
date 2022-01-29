import type {NextApiResponse} from 'next'

import {dataType} from "@/script/data_type";
import getItemById from "@/script/get_item_by_id";


export default async (req: { query: { user: string, id: string } }, res: NextApiResponse<dataType>) => {
    const {'user': user, 'id': id} = req.query
    const data = await getItemById(user, id)
    res.status(200).json(data)
}