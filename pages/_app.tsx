import '../styles/globals.css'
import type {AppProps} from 'next/app'
import IconList from "../components/IconList";


function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <IconList/>
        </>
    );
}

export default MyApp
