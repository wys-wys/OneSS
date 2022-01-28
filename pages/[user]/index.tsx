import {useRouter} from 'next/router'
import {InferGetServerSidePropsType} from "next";

import getChildrenByRoute from "@/script/get_children_by_route";
import FileList from "@/components/List/FileList";

export default function UserIndex({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const {user} = useRouter().query
    return (
        !data ? <div className={"flex justify-center items-center h-full text-2xl text-gray-200"}>404 - Item Not Found</div> :
            <FileList user={user as string} data={data}/>
    )
}

export const getServerSideProps = async (context: { query: { user: string }; }) => {
    const {user} = context.query
    const data = await getChildrenByRoute(user)
    return {
        props: {
            data,
        },
    }
}