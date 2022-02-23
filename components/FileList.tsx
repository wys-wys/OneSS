import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import {
    ArrowDownload24Regular,
    ArrowSync24Regular,
    Copy24Regular,
    DocumentSearch24Regular,
} from "@fluentui/react-icons";
import {VscArrowDown, VscCopy, VscLiveShare, VscOpenPreview} from "react-icons/vsc";

import {getIconForFile, getIconForFolder} from 'vscode-icons-js';

import {fetcher} from "@/script/swr_get";
import {dataType} from "@/script/data_type";
import ConvertB from "@/script/convert_bit";

export default function FileList({user, route}: { user: string, route?: string[] }) {
    const {data, error} = useSWR(`/api/children?user=${user}&route=${route ? route.join('/') : ''}`, fetcher)

    if (!data) return <div>
        {user && <ListHeader user={user} route={route}/>}
        <ArrowSync24Regular className={"animate-spin text-gray-900 dark:text-gray-200 w-1/3 h-1/3"}/>
    </div>

    if (error || data.status == 233) return <div className={"flex justify-center items-center h-full text-2xl text-gray-900 dark:text-gray-200"}>failed to load
        or not found.</div>

    return (
        <div className={`h-full overflow-y-`}>
            <ListHeader user={user} route={route}/>
            <Item user={user} route={route} data={data}/>
        </div>
    )
}

function ListHeader({user, route}: { user: string, route?: string[] }) {
    return (
        <div className={"flex flex-row items-center p-2  overflow-x-auto"}>
            <div className={"text-2xl text-gray-900 dark:text-gray-200 hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"}>
                <Link href={`/${user}`}>
                    <a>{user.split('@')[0].toUpperCase()}</a>
                </Link>
            </div>

            <div className={"flex flex-row items-center text-2xl text-gray-900 dark:text-gray-200"}>
                {route && route.map((item, index) => {
                    return <div key={index}>{'>'}
                        <Link href={`/${user}/${route.slice(0, index + 1).join('/')}`}>
                            <a className={"hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 truncate"}>{item}</a>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}

function Item({user, route, data}: { user: string, route?: string[], data: dataType[] }) {
    return (
        <div className={"h-full flex flex-col text-ob dark:text-ow"}>
            {data.map(({name, size, id, folder, file, image, video}, index) => {
                return (
                    folder
                        ?
                        <div key={index}
                             className={"h-8 group flex flex-row items-center space-x-2 hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 border-b border-gray-500"}>
                            <Image className={'bg-ow bg-opacity-20 rounded'} src={'/VscIcons/' + getIconForFolder(name)} width={24} height={24} layout={"fixed"} alt={name}/>
                            <Link href={`/${user}/${route ? route.join('/') + '/' : ''}${name}`}>
                                <a className={"basis-5/6 text-xl flex items-center hover:bg-black dark:hover:bg-white hover:bg-opacity-30 dark:hover:bg-opacity-30 truncate"}>{name}</a>
                            </Link>
                            <div className={"basis-1/12 flex items-center justify-center hidden md:block"}>{`${ConvertB(size)}`}
                            </div>
                            <div className={"basis-1/12 flex flex-row justify-center items-center md:invisible group-hover:visible"}>
                                <VscLiveShare className={'w-6 h-6 hover:bg-ow hover:bg-opacity-20'} onClick={() => {
                                    try {
                                        navigator.clipboard.writeText(`https://${window.location.host}/${user}/${route ? route.join('/') + '/' : ''}${name}`)
                                        alert("Copied!")
                                    } catch (e) {
                                        alert('Failed to copy!')
                                    }
                                }}/>
                            </div>
                        </div>
                        :
                        <div key={index}
                             className={"h-8 group flex flex-row items-center space-x-2 hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 border-b border-gray-500"}>
                            <Image className={'bg-ow bg-opacity-20 rounded'} src={'/VscIcons/' + getIconForFile(name)} width={24} height={24} layout={"fixed"} alt={name}/>
                            <Link href={`/item/${user}/${id}`}>
                                <a target="_blank"
                                   className={"basis-5/6 text-xl flex items-center hover:bg-black dark:hover:bg-white hover:bg-opacity-30 dark:hover:bg-opacity-30 truncate"}>{name}</a>
                            </Link>
                            <div className={"basis-1/12 flex items-center justify-center hidden md:block"}>{`${ConvertB(size)}`}
                            </div>
                            <div className={"basis-1/12 flex flex-row justify-center items-center space-x-1 md:invisible group-hover:visible"}>
                                <Link href={`/api/preview?user=${user}&id=${id}`}>
                                    <a target="_blank">
                                        <VscOpenPreview
                                            className={"w-6 h-6 hover:bg-ob dark:hover:bg-ow hover:bg-opacity-10 dark:hover:bg-opacity-10"}/>
                                    </a>
                                </Link>

                                <VscLiveShare className={'w-6 h-6 hover:bg-ow hover:bg-opacity-20'} onClick={() => {
                                    try {
                                        navigator.clipboard.writeText(`https://${window.location.host}/item/${user}/${id}`)
                                        alert("Copied!")
                                    } catch (e) {
                                        alert('Failed to copy!')
                                    }
                                }}/>

                                <VscCopy className={"w-6 h-6 hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"}
                                         onClick={() => {
                                             try {
                                                 navigator.clipboard.writeText(`https://${window.location.host}/api/download?user=${user}&id=${id}`)
                                                 alert("Copied!")
                                             } catch (e) {
                                                 alert('Failed to copy!')
                                             }
                                         }}/>
                                <Link href={`/api/download?user=${user}&id=${id}`}>
                                    <a target="_blank">
                                        <VscArrowDown
                                            className={"w-6 h-6 hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"}/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                )
            })}
        </div>
    )
}