import Link from "next/link";
import useSWR from "swr";
import {ArrowSync24Regular} from "@fluentui/react-icons";

import EachItem from "@/components/List/EachItem";
import {fetcher} from "@/script/swr_get";

export default function FileList({user, route}: { user: string, route?: string[] }) {
    const {data, error} = useSWR(`/api/children?user=${user}&route=${route ? route.join('/') : ''}`, fetcher)

    if (!data) return <div>
        {user && <ListHeader user={user} route={route}/>}
        <ArrowSync24Regular className={"animate-spin text-gray-900 dark:text-gray-200 w-1/3 h-1/3"}/>
    </div>

    if (error || data.status == 404) return <div className={"flex justify-center items-center h-full text-2xl text-gray-900 dark:text-gray-200"}>failed to load
        or not found.</div>

    return (
        <div className={`overflow-y-auto`}>
            <ListHeader user={user} route={route}/>
            <EachItem user={user} route={route} data={data}/>
        </div>
    )
}

function ListHeader({user, route}: { user: string, route?: string[] }) {
    return (
        <div className={"flex flex-row items-center p-2 bg-indigo-600 dark:bg-indigo-900 overflow-x-auto"}>
            <div className={"text-2xl text-gray-900 dark:text-gray-200 hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"}>
                <Link href={`/${user}`}>
                    <a>{user.split('@')[0].toUpperCase()}</a>
                </Link>
            </div>

            <div className={"flex flex-row items-center text-2xl text-gray-900 dark:text-gray-200"}>
                {route && route.map((item, index) => {
                    return <div key={index}>{'>'}
                        <Link href={`/${user}/${route.slice(0, index + 1).join('/')}`}>
                            <a className={"hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 truncate"}>{item}</a>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}
