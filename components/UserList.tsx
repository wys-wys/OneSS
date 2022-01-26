import {useState} from "react";
import Image from 'next/image'
import Link from 'next/link'

import userList from "@/setting/userList"

export default function UserList() {
    const [userShow, setUserShow] = useState(false);

    const onToggle = () => {
        setUserShow((status) => {
            return !status;
        })
    }

    return (
        <div onClick={onToggle}
             className={"fixed bottom-0 flex flex-row items-center p-4 pb-3 w-5/6 h-fit rounded-l-lg rounded-r " +
                 `bg-blue-400 bg-opacity-25 backdrop-blur-sm ${userShow ? "-translate-y-4" : "translate-y-2/3"} ` +
                 "shadow-list border border-gray-100 border-opacity-20 transform ease-in-out duration-300 space-x-4"}>
            {userList.map((userName, index) => {

                return (
                    <div key={index} title={userName} className={"scale-100 duration-200 hover:scale-150"}>
                        <Link href={`/${userName}`}>
                            <a><Image className={"rounded-2xl"}
                                      src={`/UserPhoto/${userName}.jpg`} width={64} height={64}
                                      alt={userName} placeholder={"blur"} blurDataURL={`/UserPhoto/dzaaaaaa.png`}/></a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}