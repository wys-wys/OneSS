import useSWR from "swr";
import Link from "next/link";

import {VscSync} from "react-icons/vsc";

import {fetcher} from "@/script/swr_get";
import SetUserName from "@/components/SetUserName";
import {musicType} from "@/script/item_type";


export default function DemoMusic() {
    SetUserName('Music Demo')

    const {data, error} = useSWR(`/api/exp/music`, fetcher)

    if (!data) return <VscSync className={"animate-spin w-1/3 h-1/3"}/>

    if (error) return <div className={"flex justify-center items-center h-full text-2xl"}>failed to load or not found.</div>

    return (
        <div className={"p-4 grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-6"}>
            {data.map(({album, coverImg, coverUrl, tracks}: musicType, index: number) => {
                return (
                    tracks[0] && <div key={index} className={"rounded-md h-fit hover:ring-2 ring-oPrimaryVariants ring-opacity-40"}>
                        <Link key={index} href={`/exp/demo/music/${index}`}>
                            <a target="_blank">
                                <div className={"aspect-square bg-center bg-cover rounded-md"} style={{backgroundImage: `url(${coverImg ? coverImg : coverUrl})`}}/>
                                <div className={"truncate text-xl"}>{album}</div>
                            </a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}