import useSWR from "swr";

import {VscSync} from "react-icons/vsc";

import {fetcher} from "@/script/swr_get";
import {itemType} from "@/script/item_type";
import FolderItem from "@/components/itemList/FolderItem";
import FileItem from "@/components/itemList/FileItem";
import ListHeader from "@/components/itemList/ListHeader";


export default function ItemList({user, route}: { user: string, route?: string[] }) {
    const {data, error} = useSWR(`/api/children?user=${user}&route=${route ? route.join('/') : ''}`, fetcher)

    if (!data) return <>{user && <div className={'flex justify-center'}><ListHeader user={user} route={route}/></div>}<VscSync className={"animate-spin w-1/3 h-1/3"}/></>

    if (error || data.status == 233) return <div className={"flex justify-center items-center text-2xl"}>failed to load or not found.</div>

    return (
        <div className={'space-y-4'}>
            <div className={'flex justify-center'}>
                <ListHeader user={user} route={route}/>
            </div>
            <div className={'flex justify-center'}>
                <div className={"w-full max-w-7xl px-2 flex flex-col divide-y divide-oPrimaryVariants divide-opacity-20"}>
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
        </div>
    )
}