import {useRouter} from "next/router";

import Item from "@/components/Item";
import Menu from "@/components/Menu/Menu";


export default function ItemUserId() {
    const {user, id} = useRouter().query

    return (
        <>
            <Menu userName={user as string}/>

            <Item user={user as string} id={id as string}/>
        </>
    )
}