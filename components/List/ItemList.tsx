import Link from "next/link";
import {ArrowDownload24Regular, Document32Regular, Folder32Regular, Image24Regular, Share24Regular, Video32Regular} from "@fluentui/react-icons";

import {dataType} from "@/script/data_type";
import ConvertB from "@/script/convert_bit";


export default function ItemList({user, route, data}: { user: string, route?: string[], data: dataType[] }) {
    return (
        <div className={"mx-2 h-fit text-gray-300"}>
            {data.map(({name, size, id, folder, file, image, video}, index) => {
                return (
                    folder
                        ?
                        <div key={index} className={"group flex flex-row space-x-2 hover:bg-white hover:bg-opacity-10 border-b border-gray-500"}>
                            <Folder32Regular className={"w-8 h-8"}/>
                            <Link href={`/${user}/${route ? route.join('/') + '/' : ''}${name}`}>
                                <a className={"basis-5/6 text-xl flex items-center hover:bg-white hover:bg-opacity-30 truncate"}>{name}</a>
                            </Link>
                            <div className={"basis-1/12 flex items-center justify-center hidden md:block"}>{`${ConvertB(size)}`}
                            </div>
                            <div className={"basis-1/12 flex flex-row justify-center items-center invisible group-hover:visible"}>
                                <ArrowDownload24Regular className={"w-8 h-8 invisible"}/>
                                <Share24Regular className={"w-8 h-8"}/>
                            </div>
                        </div>
                        :
                        <div key={index}
                             className={"group flex flex-row space-x-2 hover:bg-white hover:bg-opacity-10 border-b border-gray-500"}>
                            {image ? <Image24Regular className={"w-8 h-8"}/> :
                                video ? <Video32Regular className={"w-8 h-8"}/> : <Document32Regular className={"w-8 h-8"}/>}
                            <Link href={`/item/${user}/${id}`}>
                                <a target="_blank" className={"basis-5/6 text-xl flex items-center hover:bg-white hover:bg-opacity-30 truncate"}>{name}</a>
                            </Link>
                            <div className={"basis-1/12 flex items-center justify-center hidden md:block"}>{`${ConvertB(size)}`}
                            </div>
                            <div className={"basis-1/12 flex flex-row justify-center items-center invisible group-hover:visible"}>
                                <Link href={`/api/download?user=${user}&id=${id}`}>
                                    <a className={"hover:bg-white hover:bg-opacity-10"}><ArrowDownload24Regular className={"w-8 h-8"}/></a></Link>
                                <Share24Regular className={"w-8 h-8"}/>
                            </div>
                        </div>
                )
            })}
        </div>
    )
}

