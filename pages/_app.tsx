import '@/styles/globals.css'
import type {AppProps} from 'next/app'

import UserList from "@/components/UserList";


export default function MyApp({Component, pageProps}: AppProps,) {
    return (
        <div className={"flex justify-center items-center pb-6 w-screen h-screen bg-gray-900"}>
            <div className={"flex flex-col w-full h-full rounded-lg"}>
                <Component {...pageProps} />
            </div>
            <UserList/>
        </div>
    );
}
