import Link from "next/link";

import {VscBeaker, VscGithub, VscHome} from "react-icons/vsc";

import ThemeSwitch from "@/components/menu/ThemeSwitch";


export default function LinkList() {
    return (
        <div className={"w-full h-full flex flex-row justify-center items-center space-x-2 p-2"}>

            <Link href={"/"}><a>
                <button className={'btn btn-ghost'}>
                    <VscHome className={"w-6 h-6"}/>
                </button>
            </a></Link>

            <Link href={"/exp"}><a target={'_blank'}>
                <button className={'btn btn-ghost'}>
                    <VscBeaker className={'w-6 h-6'}/>
                </button>
            </a></Link>

            <ThemeSwitch/>

            <Link href={"https://github.com/Tualin14/OneSS"}><a target={'_blank'}>
                <button className={"btn btn-ghost"}>
                    <VscGithub className={"w-6 h-6"}/>
                </button>
            </a></Link>
        </div>
    )
}