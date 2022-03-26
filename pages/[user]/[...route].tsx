import {useRouter} from 'next/router'

import ItemList from "@/components/ItemList/ItemList";
import Menu from "@/components/Menu/Menu";


export default function UserRoute() {
    const {user, route} = useRouter().query

    return (
        <>
            <Menu userName={user as string}/>

            <div className={'flex justify-center mb-14'}>
                <ItemList user={user as string} route={route as string[]}/>
            </div>
        </>
    )
}
