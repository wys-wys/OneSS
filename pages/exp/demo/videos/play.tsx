import {useRouter} from "next/router";
import SetUserName from "@/components/SetUserName";


export default function DemoVideoPlay() {
    const {user, id} = useRouter().query

    SetUserName(user as string)

    return (
        <div className={"h-full flex justify-center aspect-video p-8"}>
            <video src={`/api/item/content?user=${user}&id=${id}`} controls/>
        </div>
    )
}