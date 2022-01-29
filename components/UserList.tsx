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
             className={`fixed bottom-0 flex flex-row items-center bg-blue-900 p-3 w-full h-fit shadow-md
             overflow-x-auto transform duration-200 space-x-2 ${userShow ? "translate-y-3/4" : "translate-y-0"}`}>
            {userList.map((userName, index) => {
                return (
                    <div key={index} title={userName} className={"items-center duration-100 hover:scale-125"}>
                        <Link href={`/${userName}`}>
                            <a><Image src={`/UserPhoto/${userName}.jpg`} width={64} height={64} alt={userName}/></a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}