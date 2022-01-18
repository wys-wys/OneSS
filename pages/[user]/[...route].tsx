import {useRouter} from 'next/router'
import {InferGetServerSidePropsType} from "next";

import getChildrenByPath from "../../script/get_children_by_path";
import List from "../../components/Lists/List";

export default function UserAndRoute({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const {user, route} = useRouter().query
    return (
        <List user={user as string} route={route as string[]} data={data}/>
    )
}

export const getServerSideProps = async (context: { query: { user: string; route: string[]; }; }) => {
    const {user, route} = context.query
    const total_route = `/${route.join('/')}`
    const data = await getChildrenByPath(total_route, user)
    return {
        props: {
            data,
        },
    }
}