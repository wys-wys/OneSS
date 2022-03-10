import {useRouter} from 'next/router'

import ItemList from "@/components/itemList/ItemList";
import SetUserName from "@/components/SetUserName";


export default function UserIndex() {
    const {user} = useRouter().query

    SetUserName(user as string)

    return (
        <div className={'flex justify-center mb-14'}>
            <ItemList user={user as string}/>
        </div>
    )
}
