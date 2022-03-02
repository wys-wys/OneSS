import {useRouter} from "next/router";
import SetUserName from "@/components/SetUserName";
import useSWR from "swr";
import {fetcher} from "@/script/swr_get";
import {VscSync} from "react-icons/vsc";


export default function DemoVideoPlay() {
    const {id} = useRouter().query

    SetUserName('Video Play Demo')

    const {data, error} = useSWR(`/api/exp/video`, fetcher)

    if (!data) return <VscSync className={"animate-spin text-ob dark:text-ow w-1/3 h-1/3"}/>

    if (error) return <div className={"flex justify-center items-center h-full text-2xl text-ob dark:text-ow"}>failed to load or not found.</div>

    return (
        <div className={"h-full flex justify-center aspect-video p-8"}>
            <video src={data[id as string] && data[id as string]['content']} controls/>
        </div>
    )
}