import fs from "fs";

import userList from "@/setting/userList";
import getUserPhoto from "@/script/get_user_photo";

export default function Home() {
    return (
        <div className={"flex flex-col justify-center items-center w-full h-full text-gray-900 dark:text-gray-200 space-y-4"}>
            <div className={"text-8xl"}>OneSS</div>
            <div className={"text-2xl"}>Site designed by <a target="_blank" href={"https://github.com/Tualin14"} className={"font-bold underline"}
                                                            rel="noreferrer">Tualin14</a>,
                App icon by <a target="_blank" href={"https://github.com/microsoft/fluentui-system-icons"}
                               className={"font-bold underline"} rel="noreferrer">fluentui-system-icons(MIT)</a>
            </div>
        </div>
    )
}


export const getStaticProps = async () => {
    for (let userName of userList) {
        const photo = await getUserPhoto(userName)
        !photo ? console.log(`\n==============\nNo user: ${userName}\n==============`) :
            fs.writeFileSync(`./public/UserPhoto/${userName}.jpg`, photo, 'base64')
    }

    return {props: {ok: 233},}
}
