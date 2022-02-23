import Link from "next/link";

import {VscGithub, VscHome} from "react-icons/vsc";

import ThemeSwitch from "@/components/menu/ThemeSwitch";


export default function IconList() {
    return (
        <div className={"w-fit h-full flex flex-row justify-center items-center space-x-2 p-2"}>

            <Link href={"/"}><a>
                <div className={"flex items-center justify-center text-ob dark:text-ow rounded hover:bg-ow hover:bg-opacity-20"}>
                    <VscHome className={"w-12 h-12"}/>
                </div>
            </a></Link>

            <Link href={"/apiList"}><a>
                <div className={"w-12 h-12 flex items-center justify-center text-2xl text-ob dark:text-ow rounded hover:bg-ow hover:bg-opacity-20"}>
                    API
                </div>
            </a></Link>

            <ThemeSwitch/>

            <Link href={"https://github.com/Tualin14/OneSS"}><a target={'_blank'}>
                <div className={"w-12 h-12 flex items-center justify-center text-ob dark:text-ow rounded hover:bg-ow hover:bg-opacity-20"}>
                    <VscGithub className={"w-11 h-11"}/>
                </div>
            </a></Link>
        </div>
    )
}