import fs from "fs";

import FileList from "@/components/List/FileList";
import userList from "@/setting/userList";
import getUserPhoto from "@/script/get_user_photo";

export default function Home() {
    return (
        <FileList/>
    )
}


export const getStaticProps = async () => {
    for (let userName of userList) {
        const photo = await getUserPhoto(userName)

        if (!photo) {
            break
        }

        fs.writeFileSync(`./public/UserPhoto/${userName}.jpg`, photo, 'base64')
    }

    return {
        props: {
            ok: 1
        },
    }

}
