import '@/styles/globals.css'
import type {AppProps} from 'next/app'

import bg from "@/public/bg.jpg"
import UserList from "@/components/UserList";


function MyApp({Component, pageProps}: AppProps) {
    return (
        <div
            className={"flex justify-center items-center p-4 pb-6 " +
                "w-screen h-screen bg-fixed bg-center bg-cover"}
            style={{backgroundImage: `url(${bg.src})`}}>
            <Component {...pageProps} />
            <UserList/>
        </div>
    );
}

export default MyApp
