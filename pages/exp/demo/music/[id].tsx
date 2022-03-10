import {useRouter} from "next/router";
import useSWR from "swr";

import {VscSync} from "react-icons/vsc";

import {fetcher} from "@/script/swr_get";
import SetUserName from "@/components/SetUserName";
import {tracksType} from "@/script/data_type";


export default function DemoMusicAlbum() {
    const {id} = useRouter().query

    SetUserName('Music Play Demo')

    const {data, error} = useSWR(`/api/exp/music`, fetcher)

    if (!data) return <VscSync className={"animate-spin w-1/3 h-1/3"}/>

    if (error) return <div className={"flex justify-center items-center h-full text-2xl"}>failed to load or not found.</div>

    const tracks = data[id as string] && data[id as string]['tracks']

    console.log(tracks)

    return (
        <div className={"w-1/2 p-4 flex flex-col justify-center space-y-4"}>
            {tracks && tracks.map(({name, content}: tracksType, index: number) => {
                return (
                    <div key={index} className={'w-full flex flex-row item-center justify-center rounded-md border border-oPrimaryVariants border-opacity-20'}>
                        <div className={'text-2xl text-center'}>{name}</div>
                        <audio src={content} controls/>
                    </div>
                )
            })}
        </div>
    )
}