import Link from "next/link";

import {VscBeaker, VscGithub, VscHome} from "react-icons/vsc";

import DarkSwitch from "@/components/menu/DarkSwitch";


export default function IconList() {
    return (
        <div className={"w-fit h-full flex flex-row justify-center items-center space-x-2 p-2"}>

            <Link href={"/"}><a>
                <div className={"flex items-center justify-center rounded hover:bg-oWhite hover:bg-opacity-20"}>
                    <VscHome className={"w-8 h-8"}/>
                </div>
            </a></Link>

            <Link href={"/exp"}><a target={'_blank'}>
                <div className={"w-8 h-8 flex items-center justify-center rounded hover:bg-oWhite hover:bg-opacity-20"}>
                    <VscBeaker className={'w-7 h-7'}/>
                </div>
            </a></Link>

            <DarkSwitch/>

            <Link href={"https://github.com/Tualin14/OneSS"}><a target={'_blank'}>
                <div className={"w-8 h-8 flex items-center justify-center rounded hover:bg-oWhite hover:bg-opacity-20"}>
                    <VscGithub className={"w-7 h-7"}/>
                </div>
            </a></Link>
        </div>
    )
}