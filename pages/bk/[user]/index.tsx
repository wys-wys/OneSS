import {useRouter} from 'next/router'

import FileList from "@/components/bk/List/FileList";


export default function UserIndex() {
    const {user} = useRouter().query
    return (
        <FileList user={user as string}/>
    )
}
