import useSWR from "swr";
import {fetcher} from "@/script/swr_get";
import {VscCloudDownload, VscCopy, VscLiveShare, VscOpenPreview, VscSync} from "react-icons/vsc";
import {itemType} from "@/script/data_type";
import convertB from "@/script/convert_bit";
import Link from "next/link";

export default function Item({user, id}: { user: string, id: string }) {

    const {data, error} = useSWR(`/api/item?user=${user}&id=${id}`, fetcher)


    if (!data) return <VscSync className={"animate-spin text-oBlack dark:text-oWhite w-1/3 h-1/3"}/>

    if (error || data.status == 233) return <div className={"flex justify-center items-center h-full text-2xl text-oBlack dark:text-oWhite"}>failed to load or not found.</div>

    const {name, size, createdDateTime, lastModifiedDateTime, thumbnails}: itemType = data

    return (
        <div className="hero min-h-screen bg-base-200 overflow-x-auto">
            <div className="hero-content flex-col lg:flex-row">
                {thumbnails["0"] && <img src={thumbnails["0"].large.url} alt={'thumbnails'} className="max-w-sm rounded-lg shadow-2xl"/>}
                <div className={'space-y-4 flex flex-col items-center'}>
                    <div className="text-5xl font-bold truncate">{name}</div>
                    <div className="text-xl">Size: {convertB(size)}</div>
                    <div className="text-2xl font-bold">Created Date Time</div>
                    <div className="text-xl">{createdDateTime}</div>
                    <div className="text-2xl font-bold">Last Modified Date Time</div>
                    <div className="text-xl">{lastModifiedDateTime}</div>

                    <div className={"btn-group inline"}>
                        <button className={'btn'}>
                            <Link href={`/api/preview?user=${user}&id=${id}`}><a target="_blank"><VscOpenPreview className={"w-6 h-6"}/></a></Link>
                        </button>

                        <button className={'btn'} onClick={() => {
                            try {
                                navigator.clipboard.writeText(`https://${window.location.host}/item/${user}/${id}`)
                                alert(`Copied: https://${window.location.host}/item/${user}/${id}`)
                            } catch (e) {
                                alert('Failed to copy!')
                            }
                        }}>
                            <VscLiveShare className={'w-6 h-6'}/></button>

                        <button className={'btn'} onClick={() => {
                            try {
                                navigator.clipboard.writeText(`https://${window.location.host}/api/item/content?user=${user}&id=${id}`)
                                alert(`Copied: https://${window.location.host}/api/item/content?user=${user}&id=${id}`)
                            } catch (e) {
                                alert('Failed to copy!')
                            }
                        }}>
                            <VscCopy className={"w-6 h-6"}/></button>

                        <button className={'btn'}>
                            <a href={`/api/item/content?user=${user}&id=${id}`} download><VscCloudDownload className={"w-6 h-6"}/></a>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        // <div className={"flex p-4 justify-center w-full h-full"}>
        //     <div className={"flex flex-col w-3/4 items-center justify-center p-2 space-y-4 border-2 border-oPrimaryVariants border-opacity-20 rounded-md"}>
        //         {thumbnails["0"] && <img src={thumbnails["0"].large.url} alt={'thumbnails'} className={"w-fit h-48"}/>}
        //         {/*<Image src={thumbnails["0"].large.url} alt={'thumbnails'} width={thumbnails["0"].large.width / 2} height={thumbnails["0"].large.height / 2}/>}*/}
        //
        //         <div className={"flex flex-col justify-center items-center h-fit w-fit space-y-2 truncate"}>
        //             <div className={"text-2xl"}>{name}</div>
        //             <div>{convertB(size)}</div>
        //             <div className={"text-xl"}>Created Date Time:</div>
        //             <div>{createdDateTime}</div>
        //             <div className={"text-xl"}>Last Modified DateTime:</div>
        //             <div>{lastModifiedDateTime}</div>
        //
        //             <div className={"basis-1/12 flex flex-row justify-center items-center space-x-1"}>
        //                 <Link href={`/api/preview?user=${user}&id=${id}`}>
        //                     <a target="_blank"><VscOpenPreview className={"w-7 h-7 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20"}/></a>
        //                 </Link>
        //
        //                 <button onClick={() => {
        //                     try {
        //                         navigator.clipboard.writeText(`https://${window.location.host}/item/${user}/${id}`)
        //                         alert(`Copied: https://${window.location.host}/item/${user}/${id}`)
        //                     } catch (e) {
        //                         alert('Failed to copy!')
        //                     }
        //                 }}>
        //                     <VscLiveShare className={'w-7 h-7 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20'}/></button>
        //
        //                 <button onClick={() => {
        //                     try {
        //                         navigator.clipboard.writeText(`https://${window.location.host}/api/item/content?user=${user}&id=${id}`)
        //                         alert(`Copied: https://${window.location.host}/api/item/content?user=${user}&id=${id}`)
        //                     } catch (e) {
        //                         alert('Failed to copy!')
        //                     }
        //                 }}>
        //                     <VscCopy className={"w-7 h-7 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20"}/></button>
        //
        //                 <Link href={`/api/item/content?user=${user}&id=${id}`}>
        //                     <a target="_blank"><VscCloudDownload
        //                         className={"w-7 h-7 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20"}/></a>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
