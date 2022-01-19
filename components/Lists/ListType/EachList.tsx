import FileIcons from "../../FileIcons";

import baseSetting from "../../../setting/baseSetting";
import SelectIcon from "./SelectIcon";

type ItemData = Array<{ name: string, size: number, id: string, folder: { childCount: number }, file: { mimeType: string } }>

export default function EachList({user, route, data}: { user: string, route?: string[], data: ItemData }) {

    return (
        <div title={"File list"} className={"mx-2 h-50px text-gray-900"}>
            {data.map(({name, size, id, folder, file}, index) => {

                if (folder) {
                    return (
                        <div key={index} title={"Folder list"}
                             className={"group flex flex-row space-x-1 hover:bg-black hover:bg-opacity-10 border-b-2"}>
                            <FileIcons kind={"folder"}/>
                            <a href={`./${route ? route.slice(-1) : user}/${name}`}
                               className={"basis-3/4 text-2xl flex items-center hover:bg-white hover:bg-opacity-30"}>
                                <div title={"Name"}>{name}</div>
                            </a>
                            <div title={"Size"}
                                 className={"basis-1/6 flex items-center justify-center"}>{`${folder.childCount} items`}
                            </div>
                            <div title={"Action"}
                                 className={"basis-1/12 flex flex-row justify-center items-center text-4xl invisible group-hover:visible"}>
                                <FileIcons kind={"share"} href={"#"}/>
                            </div>
                        </div>
                    )
                }

                return (
                    <div key={index} title={"File list"}
                         className={"group flex flex-row space-x-1 hover:bg-black hover:bg-opacity-10 border-b-2"}>
                        <SelectIcon mimeType={file.mimeType}/>
                        <div title={"Name"} className={"basis-3/4 text-2xl flex items-center"}>{name}</div>
                        <div title={"Size"}
                             className={"basis-1/6 flex items-center justify-center"}>{`${ConvertB(size)}`}
                        </div>
                        <div title={"Action"}
                             className={"basis-1/12 flex flex-row justify-center items-center text-4xl invisible group-hover:visible"}>
                            <FileIcons kind={"download"} href={`https://${baseSetting.site}/dl/${user}/${id}`}/>
                            <FileIcons kind={"share"} href={"#"}/>
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
