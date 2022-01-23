import type {NextPage} from 'next'

import FileList from "@/components/List/FileList";
import UserList from "@/components/UserList";


const Home: NextPage = () => {
    return (
        <>
            <FileList/>
            <UserList/>
        </>
    )
}

export default Home
