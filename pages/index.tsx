import fs from "fs";

import userList from "@/setting/userList";
import getUserPhoto from "@/script/get_user_photo";
import Logo from "@/components/Logo";
import Comments from "@/components/Comments";
import SetUserName from "@/components/SetUserName";
import giscusSetting from "@/setting/giscusSetting";


export default function Home() {

    SetUserName('OneSS')

    return (
        <div className={'h-screen flex flex-col md:flex-row items-center md:items-start overflow-y-scroll'}>
            <Logo/>
            {giscusSetting.enabled && <Comments/>}
        </div>
    )
}


// export const getStaticProps = async () => {
//     for (let userName of userList) {
//         const photo = await getUserPhoto(userName)
//         !photo ? console.log(`\n==============\nNo user: ${userName}\n==============`) :
//             fs.writeFileSync(`./public/UserPhoto/${userName}.jpg`, photo, 'base64')
//     }
//
//     return {props: {ok: 233},}
// }
