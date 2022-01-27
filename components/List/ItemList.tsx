import Link from "next/link";
import {ArrowDownload24Regular, Document32Regular, Folder32Regular, Share24Regular} from "@fluentui/react-icons";

import {dataType} from "@/script/data_type";


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
                                <a className={"basis-full text-xl flex items-center hover:bg-white hover:bg-opacity-30 truncate"}>{name}</a>
                            </Link>
                            <div className={"basis-1/12 flex items-center justify-center"}>{`${ConvertB(size)}`}
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
                                <a className={"basis-full text-xl flex items-center hover:bg-white hover:bg-opacity-30 truncate"}>{name}</a>
                            </Link>
                            <div className={"basis-1/12 flex items-center justify-center invisible md:visible"}>{`${ConvertB(size)}`}
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


function ConvertB(B: number) {
    let size: string
    if (B < 0.1 * 1024) {
        size = B.toFixed(2) + "B";
    } else if (B < 0.1 * 1024 * 1024) {
        size = (B / 1024).toFixed(2) + "KB";
    } else if (B < 0.1 * 1024 * 1024 * 1024) {
        size = (B / (1024 * 1024)).toFixed(2) + "MB";
    } else {
        size = (B / (1024 * 1024 * 1024)).toFixed(2) + "GB";
    }
    return size.toString();
}
