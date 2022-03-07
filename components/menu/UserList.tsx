import Link from "next/link"
import Image from "next/image";

import userList from "@/setting/userList";


export default function UserList({userShow}: { userShow: boolean }) {
    return (
        <div className={`fixed bottom-0 w-full p-2 transition ease-in-out duration-[400ms] ${userShow ? "translate-y-0" : "translate-y-full"}`}>
            <div className={`w-full h-[100px] px-4 border border-oPrimaryVariants border-opacity-40 
            flex overflow-x-auto items-center space-x-2 bg-oPrimary rounded-xl backdrop-blur bg-opacity-90 dark:bg-opacity-40`}>
                {userList.map((userName, index) => {
                    return (
                        <Link key={index} href={`/${userName}`}><a>
                            <div className={"w-20 h-20 flex items-center justify-center rounded hover:bg-oWhite hover:bg-opacity-20"}>
                                <Image className={"rounded-2xl"} src={`/UserPhoto/${userName}.jpg`} width={64} height={64} layout={"fixed"} alt={userName}/>
                            </div>
                        </a></Link>
                    )
                })}
            </div>
        </div>
    )
}