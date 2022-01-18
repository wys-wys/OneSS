import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <body className={"bg-gradient-to-t from-sky-500 to-indigo-500"}>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument