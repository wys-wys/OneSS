import {useRouter} from 'next/router'

import FileList from "@/components/bk/List/FileList";


export default function UserRoute() {
    const {user, route} = useRouter().query
    return (
        <FileList user={user as string} route={route as string[]}/>
    )
}
