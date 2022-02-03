import {useState} from "react";
import Image from 'next/image'
import Link from 'next/link'

import userList from "@/setting/userList"
import {Home48Regular, Comment48Regular, VideoClipMultiple24Regular} from "@fluentui/react-icons";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Menu() {
    const [userShow, setUserShow] = useState(false);

    const onToggle = () => {
        setUserShow((status) => {
            return !status;
        })
    }

    return (
        <div onClick={onToggle}
             className={`fixed bottom-0 flex flex-row items-center p-4 w-full shadow-md bg-blue-600 dark:bg-blue-900
             overflow-x-auto transform duration-200 space-x-4 ${userShow ? "translate-y-3/4" : "translate-y-0"}`}>
            <div onClick={(e) => e.stopPropagation()}
                 className={"flex flex-row justify-center items-center space-x-2 text-gray-900 dark:text-gray-900 dark:text-gray-200"}>
                <ThemeSwitch/>
                <Link href={`/`}>
                    <a className={"hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"}>
                        <Home48Regular className={"w-12 h-12"}/></a>
                </Link>
                <Link href={`/comment`}>
                    <a target="_blank" className={"hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"}>
                        <Comment48Regular className={"w-12 h-12"}/></a>
                </Link>
                <Link href={`/videos`}>
                    <a target="_blank" className={"hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"}>
                        <VideoClipMultiple24Regular className={"w-12 h-12"}/></a>
                </Link>
            </div>
            {userList.map((userName, index) => {
                return (
                    <div onClick={(e) => e.stopPropagation()}
                         key={index} title={userName} className={"items-center ease-in-out duration-300 hover:scale-125"}>
                        <Link href={`/${userName}`}>
                            <a><Image src={`/UserPhoto/${userName}.jpg`} width={64} height={64} layout={"fixed"} alt={userName}/></a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}