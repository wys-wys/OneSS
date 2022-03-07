import Image from "next/image";
import Link from "next/link";
import {getIconForFile} from "vscode-icons-js";

import {VscCloudDownload, VscCopy, VscLiveShare, VscOpenPreview} from "react-icons/vsc";

import convertB from "@/script/convert_bit";


export default function FileItem({user, name, size, id, index}: { user: string, name: string, size: number, id: string, index: number }) {
    return (
        <div key={index}
             className={`h-9 group flex flex-row items-center space-x-2 rounded 
             hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20`}>

            {/*Icon*/}
            <Image className={'bg-oBlack dark:bg-oWhite bg-opacity-20 dark:bg-opacity-20 rounded'} src={'/VscIcons/' + getIconForFile(name)} width={32} height={32} layout={"fixed"}
                   alt={name}/>

            {/*Name*/}
            <Link href={`/item/${user}/${id}`}>
                <a target="_blank"
                   className={"basis-5/6 px-2 text-xl flex items-center hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20 rounded truncate"}>{name}</a>
            </Link>

            {/*Size*/}
            <div className={"basis-1/12 flex items-center hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20 rounded text-center hidden md:block"}>{convertB(size)}</div>

            {/*Action*/}
            <div className={"basis-1/12 flex flex-row justify-center items-center space-x-1 md:invisible group-hover:visible"}>
                <Link href={`/api/preview?user=${user}&id=${id}`}>
                    <a target="_blank"><VscOpenPreview className={"w-7 h-7 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20"}/></a>
                </Link>

                <button onClick={() => {
                    try {
                        navigator.clipboard.writeText(`https://${window.location.host}/item/${user}/${id}`)
                        alert(`Copied: https://${window.location.host}/item/${user}/${id}`)
                    } catch (e) {
                        alert('Failed to copy!')
                    }
                }}>
                    <VscLiveShare className={'w-7 h-7 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20'}/></button>

                <button onClick={() => {
                    try {
                        navigator.clipboard.writeText(`https://${window.location.host}/api/item/content?user=${user}&id=${id}`)
                        alert(`Copied: https://${window.location.host}/api/item/content?user=${user}&id=${id}`)
                    } catch (e) {
                        alert('Failed to copy!')
                    }
                }}>
                    <VscCopy className={"w-7 h-7 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20"}/></button>

                <Link href={`/api/item/content?user=${user}&id=${id}`}>
                    <a target="_blank"><VscCloudDownload className={"w-7 h-7 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20"}/></a>
                </Link>
            </div>
        </div>
    )
}