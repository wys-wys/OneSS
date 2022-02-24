import {useRouter} from "next/router";

export default function VideoPlay() {
    const {user, id} = useRouter().query
    return (<div className={"flex justify-center aspect-video p-4 overflow-y-auto"}>
        <video src={`/api/download?user=${user}&id=${id}`} controls/>
    </div>)
}