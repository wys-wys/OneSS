import Image from "next/image";
import {getIconForFolder} from "vscode-icons-js";
import Link from "next/link";
import ConvertB from "@/script/convert_bit";
import {VscLiveShare} from "react-icons/vsc";

export default function FolderItem({user, route, name, size, index}: { user: string, route?: string[], name: string, size: number, index: number }) {
    return (
        <div key={index}
             className={`h-9 group flex flex-row items-center space-x-2 rounded 
             hover:bg-ob dark:hover:bg-ow hover:bg-opacity-20 dark:hover:bg-opacity-20`}>

            {/*Icon*/}
            <Image className={'bg-ob dark:bg-ow bg-opacity-20 dark:bg-opacity-20 rounded'} src={'/VscIcons/' + getIconForFolder(name)} width={32} height={32} layout={"fixed"}
                   alt={name}/>

            {/*Name*/}
            <Link href={`/${user}/${route ? route.join('/') + '/' : ''}${name}`}>
                <a className={"basis-5/6 px-2 text-xl flex items-center hover:bg-ob dark:hover:bg-ow hover:bg-opacity-20 dark:hover:bg-opacity-20 rounded truncate"}>{name}</a>
            </Link>

            {/*Size*/}
            <div className={"basis-1/12 flex items-center text-center hidden md:block"}>{ConvertB(size)}</div>

            {/*Action*/}
            <div className={"basis-1/12 flex flex-row justify-center items-center space-x-1 md:invisible group-hover:visible"}>
                <VscLiveShare className={'w-7 h-7 rounded hover:bg-ob dark:hover:bg-ow hover:bg-opacity-20 dark:hover:bg-opacity-20'} onClick={() => {
                    try {
                        navigator.clipboard.writeText(`https://${window.location.host}/${user}/${route ? route.join('/') + '/' : ''}${name}`)
                        alert(`Copied: https://${window.location.host}/${user}/${route ? route.join('/') + '/' : ''}${name}`)
                    } catch (e) {
                        alert('Failed to copy!')
                    }
                }}/>
            </div>
        </div>
    )
}