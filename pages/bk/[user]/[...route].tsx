import {useRouter} from 'next/router'
import {InferGetServerSidePropsType} from "next";

import getChildrenByRoute from "../../../script/get_children_by_route";
import List from "../../../components/bk/Lists/List";

export default function UserAndRoute({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const {user, route} = useRouter().query
    return (
        data == 404 ? <div>404</div> :
            <List user={user as string} route={route as string[]} data={data}/>
    )
}

export const getServerSideProps = async (context: { query: { user: string; route: string[]; }; }) => {
    const {user, route} = context.query
    const total_route = `/${route.join('/')}`
    const data = await getChildrenByRoute(user, total_route)
    return {
        props: {
            data,
        },
    }
}