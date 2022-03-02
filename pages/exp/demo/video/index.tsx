import useSWR from "swr";
import Link from "next/link";

import {VscSync} from "react-icons/vsc";

import {fetcher} from "@/script/swr_get";
import SetUserName from "@/components/SetUserName";
import {videoType} from "@/script/item_type";


export default function DemoVideos() {
    SetUserName('Videos Demo')

    const {data, error} = useSWR(`/api/exp/video`, fetcher)

    if (!data) return <VscSync className={"animate-spin text-ob dark:text-ow w-1/3 h-1/3"}/>

    if (error) return <div className={"flex justify-center items-center h-full text-2xl text-ob dark:text-ow"}>failed to load or not found.</div>

    return (
        <div className={"h-screen p-4 pb-16 grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 overflow-y-auto gap-6 text-ob dark:text-ow"}>
            {data.map(({name, thumbnail, content}: videoType, index: number) => {
                return (
                    <div key={index} className={"rounded-md h-fit hover:ring-2 ring-ob ring-opacity-20 dark:ring-ow dark:ring-opacity-20"}>
                        <Link href={`/exp/demo/video/${index}`}>
                            <a target="_blank">
                                <div className={"aspect-video bg-center bg-cover rounded-md"} style={{backgroundImage: `url(${thumbnail})`}}/>
                                <div className={"truncate text-xl"}>{name}</div>
                            </a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}