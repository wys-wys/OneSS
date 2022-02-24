import fs from "fs";

import userList from "@/setting/userList";
import getUserPhoto from "@/script/get_user_photo";
import Menu from "@/components/menu/Menu";
import Logo from "@/components/Logo";

export default function Home() {
    return (
        <div className={'flex flex-col md:flex-row items-center'}>
            <Menu userName={'OneSS'}/>
            <Logo/>
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
