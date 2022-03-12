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

    if (!data) return <VscSync className={"animate-spin w-72 h-72"}/>

    if (error || data.status == 233) return <div className={"flex justify-center items-center text-2xl"}>failed to load or not found.</div>

    const tracks = data[id as string] && data[id as string]['tracks']

    console.log(tracks)

    return (
        <div className="overflow-x-auto p-4">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Play</th>
                </tr>
                </thead>
                <tbody>
                {tracks && tracks.map(({name, content}: tracksType, index: number) => {
                    return (
                        <tr key={index}>
                            <td>{name}</td>
                            <td>
                                <audio src={content} controls/>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}