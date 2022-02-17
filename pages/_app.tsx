import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'
import {ThemeProvider} from 'next-themes'

import UserList from "@/components/UserList";


export default function MyApp({Component, pageProps}: AppProps,) {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">

            <Head>
                <title>OneSS</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>

            <UserList/>
            <div className={"w-screen h-screen pl-[100px] overflow-hidden bg-ow dark:bg-ob"}>
                <Component {...pageProps} />
            </div>

        </ThemeProvider>
    );
}
