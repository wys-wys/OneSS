import Link from "next/link";

import {VscDeviceCameraVideo, VscGithub} from "react-icons/vsc";
import {BsMusicNoteBeamed} from "react-icons/bs";

import SetUserName from "@/components/SetUserName";


export default function ApiList() {

    SetUserName('Experimental Feature')

    return (
        <div className={'text-4xl'}>
            <div>实验性功能--experimental-feature</div>
            <Link href={`https://github.com/Tualin14/OneSS#实验性功能--experimental-feature`}>
                <a target="_blank">
                    <VscGithub className={"w-14 h-14 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20"}/></a>
            </Link>

            <div>Videos Demo</div>
            <Link href={`/exp/demo/video`}>
                <a target="_blank">
                    <VscDeviceCameraVideo className={"w-14 h-14 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20"}/></a>
            </Link>

            <div>Music Demo</div>
            <Link href={`/exp/demo/music`}>
                <a target="_blank">
                    <BsMusicNoteBeamed className={"w-14 h-14 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20"}/></a>
            </Link>
        </div>
    )
}
