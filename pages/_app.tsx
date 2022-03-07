import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'
import {ThemeProvider} from 'next-themes'

import Menu from "@/components/menu/Menu";


export default function MyApp({Component, pageProps}: AppProps,) {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">

            <Menu/>

            <div className={`transition ease-out duration-500 py-12 text-oBlack dark:text-oWhite`}>
                <Component {...pageProps}/>
            </div>

        </ThemeProvider>
    );
}
