import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'
import {ThemeProvider} from 'next-themes'

import Menu from "@/components/menu/Menu";


export default function MyApp({Component, pageProps}: AppProps,) {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">

            <Head>
                <title>OneSS</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="/favicons/site.webmanifest"/>
                <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <script/>
            </Head>

            <Menu/>

            <div className={"h-screen pt-12 overflow-hidden transition ease-in duration-500 bg-ow dark:bg-ob text-ob dark:text-ow"}>
                <Component {...pageProps}/>
            </div>

        </ThemeProvider>
    );
}
