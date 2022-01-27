import Link from "next/link";

import {dataType} from "@/script/data_type";


export default function ItemList({user, route, data}: { user: string, route?: string[], data: dataType[] }) {
    return (
        <div className={"mx-2 h-50px text-gray-300"}>
            {data.map(({name, size, id, folder, file, "@microsoft.graph.downloadUrl": dl}, index) => {
                return (
                    folder
                        ?
                        <div key={index} className={"group flex flex-row space-x-1 hover:bg-white hover:bg-opacity-10 border-b border-gray-500"}>
                            {/*<FileIcons kind={"folder"}/>*/}
                            <Link href={`/${route ? route.slice(-1) : user}/${name}`}>
                                <a className={"basis-3/4 text-2xl flex items-center hover:bg-white hover:bg-opacity-30 truncate"}>
                                    {name}
                                </a>
                            </Link>
                            <div className={"basis-1/6 flex items-center justify-center"}>{`${folder.childCount} items`}
                            </div>
                            <div className={"basis-1/12 flex flex-row justify-center items-center invisible group-hover:visible"}>
                                {/*<FileIcons kind={"share"} href={"#"}/>*/}
                            </div>
                        </div>
                        :
                        <div key={index}
                             className={"group flex flex-row space-x-1 hover:bg-white hover:bg-opacity-10 border-b border-gray-500"}>
                            {/*<SelectIcon mimeType={file.mimeType}/>*/}
                            <div className={"basis-3/4 text-2xl flex items-center truncate ..."}>{name}</div>
                            <div className={"basis-1/6 flex items-center justify-center"}>{`${ConvertB(size)}`}
                            </div>
                            <div className={"basis-1/12 flex flex-row justify-center items-center invisible group-hover:visible"}>
                                {/*<FileIcons kind={"download"} href={dl} download/>*/}
                                {/*<FileIcons kind={"share"} href={"#"}/>*/}
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
