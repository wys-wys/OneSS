import type {NextApiResponse} from 'next'

import {dataType} from "@/script/data_type";
import getChildrenByRoute from "@/script/get_children_by_route";


export default async (req: { query: { user: string, route?: string[] } }, res: NextApiResponse<dataType>) => {
    const {'user': user, 'route': route} = req.query
    const data = await getChildrenByRoute(user, route ? `/${route}` : '')
    res.status(200).json(data)
}