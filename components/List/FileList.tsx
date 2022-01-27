import Link from "next/link";

import {dataType} from "@/script/data_type";
import ItemList from "@/components/List/ItemList";

export default function FileList({user, route, data}: { user: string, route?: string[], data: dataType[] }) {
    return (
        <div className={"rounded-lg shadow-2xl overflow-auto"}>
            <Header user={user} route={route}/>
            <ItemList user={user} route={route} data={data}/>
        </div>
    )
}

function Header({user, route}: { user: string, route?: string[] }) {
    return (
        <div className={"m-2 border-b-2"}>
            <span className={"text-2xl text-gray-300 hover:bg-white hover:bg-opacity-10"}>
                <Link href={`/${user}`}>
                <a>{user}</a>
                </Link>
            </span>

            <span title={"Path"} className={"text-2xl text-gray-300"}>
                {route && route.map((item, index) => {
                    return <span key={index} className={"hover:bg-white hover:bg-opacity-10"}>{'>'}
                        <Link href={`/${user}/${route.slice(0, index + 1).join('/')}`}>
                        <a>{item}</a>
                        </Link>
                    </span>
                })}
            </span>
        </div>
    )
}
