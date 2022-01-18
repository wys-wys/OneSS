import {useRouter} from 'next/router'
import {InferGetServerSidePropsType} from "next";

import getChildrenByPath from "../../script/get_children_by_path";
import List from "../../components/Lists/List";

export default function UserIndex({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const {user} = useRouter().query
    return (
        <List user={user as string} data={data}/>
    )
}

export const getServerSideProps = async (context: { query: { user: string }; }) => {
    const {user} = context.query
    const total_route = ""
    const data = await getChildrenByPath(total_route, user)
    return {
        props: {
            data,
        },
    }
}