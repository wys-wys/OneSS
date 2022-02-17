import fs from "fs";

import userList from "@/setting/userList";
import getUserPhoto from "@/script/get_user_photo";
import Heading from "@/components/Heading";
import Discussion from "@/components/Discussion";
import Logo from "@/components/Logo";

export default function Home() {
    return (
        <div className={"w-full h-full"}>
            <Heading/>
            <div className={"w-full h-full flex"}>
                <div className={"w-full h-4/5 flex justify-center items-center"}>
                    <Logo/>
                </div>
                <Discussion/>
            </div>
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
