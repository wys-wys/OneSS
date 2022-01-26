import '@/styles/globals.css'
import type {AppProps} from 'next/app'

import UserList from "@/components/UserList";


export default function MyApp({Component, pageProps}: AppProps,) {

    return (
        <div className={"flex justify-center items-center p-4 pb-6 " +
            "w-screen h-screen bg-fixed bg-center bg-cover"}
             style={{backgroundImage: `url(https://bing.biturl.top/?format=image)`}}>
            <div className={"flex flex-col justify-center items-center w-full h-full rounded-lg " +
                "bg-blue-400 bg-opacity-25 backdrop-blur-sm " +
                "shadow-list border border-gray-100 border-opacity-20"}>
                <Component {...pageProps} />
            </div>
            <UserList/>
        </div>
    );
}
