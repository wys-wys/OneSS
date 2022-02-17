import Link from "next/Link"
import Image from "next/image";
import {VscHome} from "react-icons/vsc";

import userList from "@/setting/userList";


export default function UserList() {
    return (
        <div className={"absolute left-0 w-[100px] h-screen flex flex-col overflow-y-auto space-y-2 items-center pb-6 bg-oLp shadow-ox dark:bg-oDp"}>
            {/*HomeButton*/}
            <Link href={"/"}><a>
                <div className={"w-[100px] h-[80px] flex items-center justify-center text-ow hover:bg-ow hover:bg-opacity-20"}>
                    <VscHome className={"w-12 h-12"}/>
                </div>
            </a></Link>

            {/*UserList*/}
            {userList.map((userName, index) => {
                return (
                    <Link key={index} href={`/${userName}`}><a>
                        <div className={"w-20 h-20 flex items-center justify-center hover:bg-ow hover:bg-opacity-20"}>
                            <Image className={"rounded-2xl"} src={`/UserPhoto/${userName}.jpg`} width={64} height={64} layout={"fixed"} alt={userName}/>
                        </div>
                    </a></Link>
                )
            })}
        </div>
    )
}