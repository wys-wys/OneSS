import Link from "next/link";

import {dataType} from "@/script/data_type";
import ItemList from "@/components/List/ItemList";

export default function FileList({user, route, data}: { user: string, route?: string[], data: dataType[] }) {
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
