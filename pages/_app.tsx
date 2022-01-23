import '@/styles/globals.css'
import type {AppProps} from 'next/app'

import bg from "@/public/image/bg.jpg"


function MyApp({Component, pageProps}: AppProps) {
    return (
        <div
            className={"flex flex-row justify-center items-center space-x-4 pl-4 py-4 " +
                "w-screen h-screen bg-fixed bg-center bg-cover"}
            style={{backgroundImage: `url(${bg.src})`}}>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp
