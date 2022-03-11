import {useRouter} from "next/router";

import SetUserName from "@/components/SetUserName";
import Item from "@/components/Item";


export default function ItemUserId() {
    const {user, id} = useRouter().query

    SetUserName(user as string)

    return (
        <Item user={user as string} id={id as string}/>
    )
}