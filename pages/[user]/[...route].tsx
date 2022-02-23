import {useRouter} from 'next/router'

import FileList from "@/components/bk/List/FileList";
import Menu from "@/components/menu/Menu";


export default function UserRoute() {
    const {user, route} = useRouter().query
    return (
        <div>
            <Menu userName={user as string}/>
            <FileList user={user as string} route={route as string[]}/>
        </div>
    )
}
