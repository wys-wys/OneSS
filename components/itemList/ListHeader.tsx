import Link from "next/link";
import {VscFolderOpened, VscRootFolderOpened} from "react-icons/vsc";


export default function ListHeader({user, route}: { user: string, route?: string[] }) {
    return (
        <div className="text-xl breadcrumbs px-4">
            <ul>
                <li><Link href={`/${user}`}>
                    <a><VscRootFolderOpened className={'mr-2'}/>Root</a>
                </Link></li>
                {route && route.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link key={index} href={`/${user}/${route.slice(0, index + 1).join('/')}`}>
                                <a><VscFolderOpened className={'mr-2'}/>{item}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}