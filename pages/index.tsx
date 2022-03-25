import Head from 'next/head'

import SetUserName from "@/components/SetUserName";
import customSetting from "@/setting/customSetting";
import userList from "@/setting/userList";


export default function Home() {

    SetUserName('OneSS')

    return (
        <>
            <Head>
                <title>{customSetting.webName} | Home</title>
                {userList.map((userName, index) => {
                    return (
                        <div key={index}>
                            <link rel="preload" href={`/api/children?user=${userName}&route=`} as="fetch" crossOrigin="anonymous"/>
                            <link rel="preload" href={`/api/quota?user=${userName}`} as="fetch" crossOrigin="anonymous"/>
                        </div>
                    )
                })}
            </Head>

            <div className={'flex flex-col md:flex-row items-center md:items-start'}>
                <div className="hero min-h-screen" style={{backgroundImage: `url(${customSetting.index.backgroundImage})`}}>
                    <div className="hero-overlay bg-opacity-40"/>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-7xl font-bold">{customSetting.index.title}</h1>
                            <p className="mb-5 text-2xl">{customSetting.index.introduction}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
