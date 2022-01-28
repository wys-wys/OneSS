import Link from "next/link";
import {ArrowDownload24Regular, Document32Regular, Folder32Regular, Share24Regular} from "@fluentui/react-icons";

import {dataType} from "@/script/data_type";
import ConvertB from "@/script/convert_bit";


export default function ItemList({user, route, data}: { user: string, route?: string[], data: dataType[] }) {
    return (
        <div className={"mx-2 h-fit text-gray-300"}>
            {data.map(({name, size, id, folder, file, "@microsoft.graph.downloadUrl": dl}, index) => {
                return (
                    folder
                        ?
                        <div key={index} className={"group flex flex-row space-x-2 hover:bg-white hover:bg-opacity-10 border-b border-gray-500"}>
                            <Folder32Regular/>
                            <Link href={`/${user}/${route ? route.slice(-1) + '/' : ''}${name}`}>
                                <a className={"basis-5/6 text-xl flex items-center hover:bg-white hover:bg-opacity-30 truncate"}>{name}</a>
                            </Link>
                            <div className={"basis-1/12 flex items-center justify-center hidden md:block"}>{`${ConvertB(size)}`}
                            </div>
                            <div className={"basis-1/12 flex flex-row justify-center items-center invisible group-hover:visible"}>
                                <Share24Regular/>
                            </div>
                        </div>
                        :
                        <div key={index}
                             className={"group flex flex-row space-x-2 hover:bg-white hover:bg-opacity-10 border-b border-gray-500"}>
                            <Document32Regular/>
                            <Link href={`/item/${user}/${id}`}>
                                <a target="view_window" className={"basis-5/6 text-xl flex items-center hover:bg-white hover:bg-opacity-30 truncate"}>{name}</a>
                            </Link>
                            <div className={"basis-1/12 flex items-center justify-center hidden md:block"}>{`${ConvertB(size)}`}
                            </div>
                            <div className={"basis-1/12 flex flex-row justify-center items-center invisible group-hover:visible"}>
                                <a href={dl} className={"hover:bg-white hover:bg-opacity-10"} download><ArrowDownload24Regular/></a>
                                <Share24Regular/>
                            </div>
                        </div>
                )
            })}
        </div>
    )
}

