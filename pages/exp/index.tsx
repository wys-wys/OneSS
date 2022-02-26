import {VscDeviceCameraVideo, VscGithub} from "react-icons/vsc";
import Link from "next/link";
import SetUserName from "@/components/SetUserName";


export default function ApiList() {

    SetUserName('Experimental Feature')

    return (
        <div className={'text-4xl'}>
            <div>API</div>
            <Link href={`https://github.com/Tualin14/OneSS/blob/main/doc/api.md`}>
                <a target="_blank">
                    <VscGithub className={"w-14 h-14 rounded hover:bg-ob dark:hover:bg-ow hover:bg-opacity-20 dark:hover:bg-opacity-20"}/></a>
            </Link>

            <div>Videos Demo</div>
            <Link href={`/exp/demo/videos`}>
                <a target="_blank">
                    <VscDeviceCameraVideo className={"w-14 h-14 rounded hover:bg-ob dark:hover:bg-ow hover:bg-opacity-20 dark:hover:bg-opacity-20"}/></a>
            </Link>
        </div>
    )
}