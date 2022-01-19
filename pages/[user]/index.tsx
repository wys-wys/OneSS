import {useRouter} from 'next/router'
import {InferGetServerSidePropsType} from "next";

import getChildrenByRoute from "../../script/get_children_by_route";
import List from "../../components/Lists/List";

export default function UserIndex({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const {user} = useRouter().query
    return (
        data == 404 ? <div>404</div> :
            <List user={user as string} data={data}/>
    )
}

export const getServerSideProps = async (context: { query: { user: string }; }) => {
    const {user} = context.query
    const total_route = ""
    const data = await getChildrenByRoute(user, total_route)
    return {
        props: {
            data,
        },
    }
}