import {useRouter} from "next/router";
import Link from "next/link";
import useSWR from "swr";
import {VscCloudDownload, VscCopy, VscLiveShare, VscOpenPreview, VscSync} from "react-icons/vsc";

import convertB from "@/script/convert_bit";
import {fetcher} from "@/script/swr_get";
import {itemType} from "@/script/item_type";
import SetUserName from "@/components/SetUserName";


export default function ItemUserId() {
    const {user, id} = useRouter().query

    SetUserName(user as string)

    const {data, error} = useSWR(`/api/item?user=${user}&id=${id}`, fetcher)


    if (!data) return <VscSync className={"animate-spin text-oBlack dark:text-oWhite w-1/3 h-1/3"}/>

    if (error || data.status == 233) return <div className={"flex justify-center items-center h-full text-2xl text-oBlack dark:text-oWhite"}>failed to load or not found.</div>

    const {name, size, createdDateTime, lastModifiedDateTime, thumbnails}: itemType = data

    return (
        <div className={"flex p-4 justify-center w-full h-full"}>
            <div className={"flex flex-col w-3/4 items-center justify-center p-2 space-y-4 border-2 border-oPrimaryVariants border-opacity-20 rounded-md"}>
                {thumbnails["0"] && <img src={thumbnails["0"].large.url} alt={'thumbnails'} className={"w-fit h-48"}/>}
                {/*<Image src={thumbnails["0"].large.url} alt={'thumbnails'} width={thumbnails["0"].large.width / 2} height={thumbnails["0"].large.height / 2}/>}*/}

                <div className={"flex flex-col justify-center items-center h-fit w-fit space-y-2 truncate"}>
                    <div className={"text-2xl"}>{name}</div>
                    <div>{convertB(size)}</div>
                    <div className={"text-xl"}>Created Date Time:</div>
                    <div>{createdDateTime}</div>
                    <div className={"text-xl"}>Last Modified DateTime:</div>
                    <div>{lastModifiedDateTime}</div>

                    <div className={"basis-1/12 flex flex-row justify-center items-center space-x-1"}>
                        <Link href={`/api/preview?user=${user}&id=${id}`}>
                            <a target="_blank"><VscOpenPreview className={"w-7 h-7 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20"}/></a>
                        </Link>

                        <button onClick={() => {
                            try {
                                navigator.clipboard.writeText(`https://${window.location.host}/item/${user}/${id}`)
                                alert(`Copied: https://${window.location.host}/item/${user}/${id}`)
                            } catch (e) {
                                alert('Failed to copy!')
                            }
                        }}>
                            <VscLiveShare className={'w-7 h-7 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20'}/></button>

                        <button onClick={() => {
                            try {
                                navigator.clipboard.writeText(`https://${window.location.host}/api/item/content?user=${user}&id=${id}`)
                                alert(`Copied: https://${window.location.host}/api/item/content?user=${user}&id=${id}`)
                            } catch (e) {
                                alert('Failed to copy!')
                            }
                        }}>
                            <VscCopy className={"w-7 h-7 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20"}/></button>

                        <Link href={`/api/item/content?user=${user}&id=${id}`}>
                            <a target="_blank"><VscCloudDownload className={"w-7 h-7 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20"}/></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
