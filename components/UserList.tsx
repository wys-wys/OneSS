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
             className={`fixed left-0 flex flex-col items-center bg-blue-400 p-3 h-full w-fit shadow-md
             overflow-y-auto transform duration-200 space-y-2 ${userShow ? "-translate-x-0" : "-translate-x-2/3"}`}>
            {userList.map((userName, index) => {
                return (
                    <div key={index} title={userName} className={"items-center duration-200 hover:scale-125"}>
                        <Link href={`/${userName}`}>
                            <a><Image src={`/UserPhoto/${userName}.jpg`} width={64} height={64} alt={userName}
                                      placeholder={"blur"} blurDataURL={"/UserPhoto/blur.webp"}/></a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}