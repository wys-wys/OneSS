import '@/styles/globals.css'
import type {AppProps} from 'next/app'

import UserList from "@/components/UserList";


export default function MyApp({Component, pageProps}: AppProps,) {

    return (
        <div className={"flex justify-center items-center pl-6 w-screen h-screen bg-gray-100"}>
            <div className={"flex flex-col w-full h-full rounded-lg pl-2"}>
                <Component {...pageProps} />
            </div>
            <UserList/>
        </div>
    );
}
