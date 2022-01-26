import fs from "fs";

import userList from "@/setting/userList";
import getUserPhoto from "@/script/get_user_photo";

export default function Home() {
    return (
        <div className={"text-2xl text-gray-200"}>index</div>
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
