import SetUserName from "@/components/SetUserName";
import personalisedDefinition from "@/setting/personalisedDefinition";


export default function Home() {

    SetUserName('OneSS')

    return (
        <div className={'flex flex-col md:flex-row items-center md:items-start'}>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${personalisedDefinition.index.backgroundImage})`}}>
                <div className="hero-overlay bg-opacity-40"/>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold">{personalisedDefinition.index.title}</h1>
                        <p className="mb-5 text-2xl">{personalisedDefinition.index.introduction}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
