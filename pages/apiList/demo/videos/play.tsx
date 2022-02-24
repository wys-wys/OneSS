import {useRouter} from "next/router";
import SetUserName from "@/components/SetUserName";


export default function DemoVideoPlay() {
    const {user, id} = useRouter().query

    SetUserName(user as string)

    return (
        <div className={"flex justify-center aspect-video p-4 overflow-y-auto"}>
            <video src={`/api/item/content?user=${user}&id=${id}`} controls/>
        </div>
    )
}