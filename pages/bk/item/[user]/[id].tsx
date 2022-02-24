import {useRouter} from "next/router";
import Link from "next/link";
import useSWR from "swr";
import {ArrowDownload48Regular, ArrowSync24Regular, Copy24Regular, DocumentSearch24Regular} from "@fluentui/react-icons";

import ConvertB from "@/script/convert_bit";
import {fetcher} from "@/script/swr_get";
import {itemType} from "@/script/item_type";


export default function ItemId() {
    const {user, id} = useRouter().query
    const {data, error} = useSWR(`/api/item?user=${user}&id=${id}`, fetcher)

    if (!data) return <div className={"flex justify-center items-center w-full h-full animate-spin text-gray-900 dark:text-gray-200"}>
        <ArrowSync24Regular className={"w-1/3 h-1/3"}/>
    </div>

    if (error || data.status == 233) return <div className={"flex justify-center items-center h-full text-2xl text-gray-900 dark:text-gray-200"}>failed to load
        or not found.</div>

    const {name, size, createdDateTime, lastModifiedDateTime, thumbnails}: itemType = data

    return (
        <div className={"flex items-center justify-center w-full h-full text-gray-900 dark:text-gray-200"}>
            <div className={"flex flex-col w-3/4 items-center justify-center p-2 space-y-4 border-2 border-gray-900 dark:border-gray-200 rounded-md"}>
                {thumbnails["0"] &&
                    <img src={thumbnails["0"].large.url} alt={'thumbnails'} className={"w-fit h-48"}/>}
                {/*<Image src={thumbnails["0"].large.url} alt={'thumbnails'} width={thumbnails["0"].large.width / 2} height={thumbnails["0"].large.height / 2}/>}*/}
                <div className={"flex flex-col justify-center items-center h-fit w-fit space-y-2 truncate"}>
                    <div className={"text-2xl"}>{name}</div>
                    <div>{ConvertB(size)}</div>
                    <div className={"text-xl"}>Created Date Time:</div>
                    <div>{createdDateTime}</div>
                    <div className={"text-xl"}>Last Modified DateTime:</div>
                    <div>{lastModifiedDateTime}</div>
                    <div>
                        <Link href={`/api/preview?user=${user}&id=${id}`}>
                            <a target="_blank">
                                <DocumentSearch24Regular
                                    className={"w-8 h-8 hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"}/>
                            </a>
                        </Link>
                        <Copy24Regular className={"w-8 h-8 hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"}
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
                                <ArrowDownload48Regular className={"w-8 h-8 hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"}/></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
