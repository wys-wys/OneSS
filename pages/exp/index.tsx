import Link from "next/link";

import {VscDeviceCameraVideo, VscGithub} from "react-icons/vsc";
import {BsMusicNoteBeamed} from "react-icons/bs";

import SetUserName from "@/components/SetUserName";


export default function ApiList() {

    SetUserName('Experimental Feature')

    return (
        <ul className="menu bg-base-100 w-fit p-2 rounded-box text-7xl">
            <li>
                <Link href={'https://github.com/Tualin14/OneSS/blob/main/doc/adv/api/api.md'}>
                    <a target={'_blank'}>
                        <VscGithub className={'w-14 h-14'}/>
                        api.md
                    </a>
                </Link>
            </li>
            <li>
                <Link href={'/exp/demo/video'}>
                    <a target={'_blank'}>
                        <VscDeviceCameraVideo className={'w-14 h-14'}/>
                        Videos Demo
                    </a>
                </Link>
            </li>
            <li>
                <Link href={'/exp/demo/music'}>
                    <a target={'_blank'}>
                        <BsMusicNoteBeamed className={'w-14 h-14'}/>
                        Music Demo
                    </a>
                </Link>
            </li>
        </ul>
    )
}
