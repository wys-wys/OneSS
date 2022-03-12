import {useRouter} from "next/router";
import SetUserName from "@/components/SetUserName";


export default function DemoVideoPlay() {
    const {content} = useRouter().query

    SetUserName('Video Play Demo')

    console.log(content)

    return (
        <div className={"h-full flex justify-center aspect-video p-8"}>
            <video src={decodeURIComponent(content as string)} controls/>
        </div>
    )
}