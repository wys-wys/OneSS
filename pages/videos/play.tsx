import {useRouter} from "next/router";

export default function VideoPlay() {
    const {user, id} = useRouter().query
    return (<div className={"flex justify-center p-4"}>
        <video className={"w-full h-5/6"} src={`/api/download?user=${user}&id=${id}`} controls/>
    </div>)
}