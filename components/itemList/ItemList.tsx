import useSWR from "swr";

import {VscSync} from "react-icons/vsc";

import {fetcher} from "@/script/swr_get";
import {itemType} from "@/script/item_type";
import FolderItem from "@/components/itemList/FolderItem";
import FileItem from "@/components/itemList/FileItem";
import ListHeader from "@/components/itemList/ListHeader";


export default function ItemList({user, route}: { user: string, route?: string[] }) {
    const {data, error} = useSWR(`/api/children?user=${user}&route=${route ? route.join('/') : ''}`, fetcher)

    if (!data) return <div className={'px-4'}>
        {user && <ListHeader user={user} route={route}/>}
        <VscSync className={"animate-spin text-ob dark:text-ow w-1/3 h-1/3"}/>
    </div>

    if (error || data.status == 233) return <div className={"flex justify-center items-center h-full text-2xl text-ob dark:text-ow"}>failed to load
        or not found.</div>

    return (
        <div className={`px-4`}>
            <ListHeader user={user} route={route}/>
            <div className={"pb-36 flex h-screen flex-col overflow-y-scroll text-ob dark:text-ow divide-y divide-ob dark:divide-ow divide-opacity-40 dark:divide-opacity-40"}>
                {data.map(({name, size, id, folder, image, video}: itemType, index: number) => {
                    return (
                        folder
                            ?
                            <FolderItem user={user} route={route} name={name} size={size} index={index}/>
                            :
                            <FileItem user={user} name={name} size={size} id={id} index={index}/>
                    )
                })}
            </div>
        </div>
    )
}