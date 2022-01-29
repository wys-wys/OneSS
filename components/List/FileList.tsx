import Link from "next/link";
import useSWR from "swr";
import {ArrowSync24Regular} from "@fluentui/react-icons";

import ItemList from "@/components/List/ItemList";
import {fetcher} from "@/script/swr_get";

export default function FileList({user, route}: { user: string, route?: string[] }) {
    const {data, error} = useSWR(`/api/children?user=${user}&route=${route ? route.join('/') : ''}`, fetcher)

    if (!data) return <div className={"flex justify-center items-center w-full h-full animate-spin text-gray-200"}>
        <ArrowSync24Regular className={"w-1/3 h-1/3"}/>
    </div>

    if (error || data.status == 404) return <div className={"flex justify-center items-center h-full text-2xl text-gray-200"}>failed to load or not found.</div>

    return (
        <div className={"overflow-y-auto"}>
            <ListHeader user={user} route={route}/>
            <ItemList user={user} route={route} data={data}/>
        </div>
    )
}

function ListHeader({user, route}: { user: string, route?: string[] }) {
    return (
        <div className={"p-2 bg-indigo-900"}>
            <span className={"text-2xl text-gray-200 hover:bg-white hover:bg-opacity-10"}>
                <Link href={`/${user}`}>
                <a>{user.split('@')[0].toUpperCase()}</a>
                </Link>
            </span>

            <span title={"Path"} className={"text-2xl text-gray-200"}>
                {route && route.map((item, index) => {
                    return <span key={index}>{'>'}
                        <Link href={`/${user}/${route.slice(0, index + 1).join('/')}`}>
                        <a className={"hover:bg-white hover:bg-opacity-10"}>{item}</a>
                        </Link>
                    </span>
                })}
            </span>
        </div>
    )
}
