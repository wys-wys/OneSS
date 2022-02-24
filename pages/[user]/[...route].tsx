import {useRouter} from 'next/router'

import ItemList from "@/components/itemList/ItemList";
import Menu from "@/components/menu/Menu";


export default function UserRoute() {
    const {user, route} = useRouter().query
    return (
        <div>
            <Menu userName={user as string}/>
            <ItemList user={user as string} route={route as string[]}/>
        </div>
    )
}
