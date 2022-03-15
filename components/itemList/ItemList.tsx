import useSWR from "swr";

import {VscSync} from "react-icons/vsc";

import {fetcher} from "@/script/swr_get";
import {itemType} from "@/script/data_type";
import FolderItem from "@/components/itemList/FolderItem";
import FileItem from "@/components/itemList/FileItem";
import ListHeader from "@/components/itemList/ListHeader";
import Quota from "@/components/Quota";


export default function ItemList({user, route}: { user: string, route?: string[] }) {
    const {data, error} = useSWR(`/api/children?user=${user}&route=${route ? route.join('/') : ''}`, fetcher)

    if (!data) return (
        <div className={'w-full lg:max-w-7xl px-2 flex flex-col'}>
            {user && <ListHeader user={user} route={route}/>}
            <VscSync className={"animate-spin w-72 h-72"}/>
        </div>
    )

    if (error || data.status == 233) return (
        <div className={'w-full lg:max-w-7xl px-2 flex flex-col'}>
            {user && <ListHeader user={user} route={route}/>}
            <div className={"flex justify-center items-center text-2xl"}>failed to load or not found.</div>
        </div>
    )

    return (
        <div className={"w-full lg:max-w-7xl px-2 pb-14 flex flex-col"}>
            <ListHeader user={user} route={route}/>
            {!route && <Quota user={user}/>}

            <div className="overflow-x-auto w-full">
                <table className="table table-compact w-full">
                    <thead>
                    <tr>
                        <th><label className={'flex items-center justify-end gap-2 text-xl'}>N<input type="checkbox" className="checkbox"/></label></th>
                        <th className={'text-xl capitalize'}>name</th>
                        <th className={'text-xl capitalize'}>size</th>
                        <th className={'text-xl capitalize'}>action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data.map(({name, size, id, folder, image, video}: itemType, index: number) => {
                        return (
                            folder
                                ?
                                <FolderItem user={user} route={route} name={name} size={size} index={index}/>
                                :
                                <FileItem user={user} name={name} size={size} id={id} index={index}/>
                        )
                    })}
                    </tbody>

                    {/*<tfoot>*/}
                    {/*<tr>*/}
                    {/*    <th><label className={'flex items-center justify-end gap-2'}>N<input type="checkbox" className="checkbox"/></label></th>*/}
                    {/*    <th className={'text-xl capitalize'}>name</th>*/}
                    {/*    <th className={'text-xl capitalize'}>size</th>*/}
                    {/*    <th className={'text-xl capitalize'}>action</th>*/}
                    {/*</tr>*/}
                    {/*</tfoot>*/}
                </table>
            </div>
        </div>
    )
}