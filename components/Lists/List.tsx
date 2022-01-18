import EachList from "./ListType/EachList";

export default function List({user, route, data}: { user: string, route?: string[], data: any }) {
    return (
        <div title={"Lists"} className={"m-4 w-4/5 min-h-screen bg-gray-100 rounded-lg shadow-2xl p-2"}>
            <Header user={user} route={route}/>
            <EachList user={user} route={route} data={data}/>
        </div>
    )
}

function Header({user, route}: { user: string, route?: string[] }) {
    if (!route) {
        return (
            <div title={"Header"} className={"m-2 border-b-4"}>
            <span title={"User"} className={"text-2xl text-gray-800"}>
                <a href={`/${user}`}>{user}</a>
            </span>
            </div>
        )
    }
    return (
        <div title={"Header"} className={"m-2 border-b-4"}>
            <span title={"User"} className={"text-2xl text-gray-800"}>
                <a href={`/${user}`}>{user}</a>
            </span>
            <span title={"Path"} className={"text-2xl text-gray-400"}>
                {route.map((item, index) => {
                    return <span key={index} className={"hover:bg-black hover:bg-opacity-10"}>/
                        <a href={`/${user}/${route.slice(0, index + 1).join('/')}`}>{item}</a></span>
                })}
            </span>
        </div>
    )
}
