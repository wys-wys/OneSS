import Link from "next/link";


export default function ListHeader({user, route}: { user: string, route?: string[] }) {
    return (
        <div className={"w-full max-w-7xl whitespace-nowrap flex flex-row items-center py-2 text-2xl border-b border-oPrimaryVariants border-opacity-80"}>
            <div className={"rounded px-1 hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20 uppercase"}>
                <Link href={`/${user}`}>
                    <a>{user.split('@')[0]}</a>
                </Link>
            </div>

            <div className={"flex h-12 flex-row items-center overflow-x-scroll"}>
                {route && route.map((item, index) => {
                    return (
                        <Link key={index} href={`/${user}/${route.slice(0, index + 1).join('/')}`}>
                            <a className={"px-1 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20"}>{'>'}{item}</a>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}