import {useRouter} from 'next/router'

import ItemList from "@/components/itemList/ItemList";
import Menu from "@/components/Menu";


export default function UserIndex() {
    const {user} = useRouter().query

    return (
        <>
            <Menu userName={user as string}/>

            <div className={'flex justify-center mb-14'}>
                <ItemList user={user as string}/>
            </div>
        </>
    )
}
