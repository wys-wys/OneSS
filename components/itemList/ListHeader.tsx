import Link from "next/link";
import {VscFolder} from "react-icons/vsc";


export default function ListHeader({user, route}: { user: string, route?: string[] }) {
    return (
        <div className="text-xl breadcrumbs">
            <ul>
                <li><Link href={`/${user}`}>
                    <a>{user.split('@')[0].toUpperCase()}</a>
                </Link></li>
                {route && route.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link key={index} href={`/${user}/${route.slice(0, index + 1).join('/')}`}>
                                <a><VscFolder className={'mr-2'}/>{item}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}