import useSWR from "swr";
import Link from "next/link";
import {ArrowSync24Regular} from "@fluentui/react-icons";

import {itemType} from "@/script/item_type";
import {fetcher} from "@/script/swr_get";


export default function Videos() {
    const {data, error} = useSWR(`/api/videos`, fetcher)

    if (!data) return <div><ArrowSync24Regular className={"animate-spin text-gray-900 dark:text-gray-200 w-1/3 h-1/3"}/></div>

    if (error) return <div className={"flex justify-center items-center h-full text-2xl text-gray-900 dark:text-gray-200"}>failed to load
        or not found.</div>

    return (
        <div className={"p-4 grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 overflow-y-auto gap-4 text-gray-900 dark:text-gray-200"}>
            {data.map(({name, id, createdBy, video, thumbnails}: itemType, index: number) => {
                return (video &&
                    <div className={"rounded-md hover:ring-2 ring-gray-900 dark:ring-gray-200"}>
                        <Link key={index} href={`/videos/play?user=${createdBy.user.email}&id=${id}`}>
                            <a target="_blank">
                                <div className={"aspect-video bg-center bg-cover rounded-md"} style={{backgroundImage: `url(${thumbnails["0"].large.url})`}}/>
                                <div className={"truncate text-xl"}>{name}</div>
                            </a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}