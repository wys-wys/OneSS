import Link from "next/link";

export default function ListHeader({user, route}: { user: string, route?: string[] }) {
    return (
        <div className={"flex flex-row items-center py-2"}>
            <div className={"text-2xl rounded px-2 text-ob dark:text-ow hover:bg-ob dark:hover:bg-ow hover:bg-opacity-20 dark:hover:bg-opacity-20"}>
                <Link href={`/${user}`}>
                    <a>{user.split('@')[0].toUpperCase()}</a>
                </Link>
            </div>

            <div className={"flex flex-row items-center overflow-x-auto text-2xl text-ob dark:text-ow"}>
                {route && route.map((item, index) => {
                    return <div key={index}>{'>'}
                        <Link href={`/${user}/${route.slice(0, index + 1).join('/')}`}>
                            <a className={"rounded px-2 hover:bg-ob dark:hover:bg-ow hover:bg-opacity-20 dark:hover:bg-opacity-20 truncate"}>{item}</a>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}