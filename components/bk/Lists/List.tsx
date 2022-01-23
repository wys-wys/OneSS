import Link from 'next/link'
import EachList from "./ListType/EachList";

export default function List({user, route, data}: { user: string, route?: string[], data: any }) {
    return (
        <div title={"Lists"} className={"m-4 lg:w-4/5 min-h-screen bg-gray-100 rounded-lg shadow-2xl p-2"}>
            <Header user={user} route={route}/>
            <EachList user={user} route={route} data={data}/>
        </div>
    )
}

function Header({user, route}: { user: string, route?: string[] }) {
    return (
        <div title={"Header"} className={"m-2 border-b-4"}>
            <span title={"User"} className={"text-2xl text-gray-800"}>
                <Link href={`/${user}`}>
                <a>{user}</a>
                </Link>
            </span>

            <span title={"Path"} className={"text-2xl text-gray-400"}>
                {route ? route.map((item, index) => {
                    return <span key={index} className={"hover:bg-black hover:bg-opacity-10"}>/
                        <Link href={`/${user}/${route.slice(0, index + 1).join('/')}`}>
                        <a>{item}</a>
                        </Link>
                    </span>
                }) : ''}
            </span>
        </div>
    )
}
