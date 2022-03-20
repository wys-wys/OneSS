import useSWR from "swr";
import Link from "next/link";

import {VscSync} from "react-icons/vsc";

import {fetcher} from "@/script/swr_get";
import SetUserName from "@/components/SetUserName";
import {musicType} from "@/script/data_type";


export default function DemoMusic() {
    SetUserName('Music Demo')

    const {data, error} = useSWR(`/api/exp/music`, fetcher)

    if (!data) return <VscSync className={"animate-spin w-72 h-72"}/>

    if (error || data.status == 233) return <div className={"flex justify-center items-center text-2xl"}>failed to load or not found.</div>

    return (
        <div className={"p-4 grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-6"}>
            {data.map(({album, coverImg, coverUrl, tracks}: musicType, index: number) => {
                return (
                    tracks[0] &&
                    <div key={index} className="card card-compact w-fit bg-base-100 shadow-xl hover:bg-base-300">
                        <Link href={`/exp/demo/music/${index}`}>
                            <a target="_blank">
                                <figure><img src={coverImg ? coverImg : coverUrl.small.url} alt="cover" className={'aspect-square'}/></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{album}</h2>
                                </div>
                            </a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}