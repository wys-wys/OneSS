import {useRouter} from "next/router";
import SetUserName from "@/components/SetUserName";


export default function DemoVideoPlay() {
    const {'content': content} = useRouter().query

    SetUserName('Video Play Demo')

    return (
        <div className={"h-full flex justify-center aspect-video p-8"}>
            <video src={decodeURIComponent(content as string)} controls/>
        </div>
    )
}