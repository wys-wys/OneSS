import {useRouter} from "next/router";
import useSWR from "swr";
import {ArrowDownload48Regular, ArrowSync24Regular} from "@fluentui/react-icons";

import ConvertB from "@/script/convert_bit";
import {fetcher} from "@/script/swr_get";
import {dataType} from "@/script/data_type";


export default function ItemId() {
    const {user, id} = useRouter().query
    const {data, error} = useSWR(`/api/item?user=${user}&id=${id}`, fetcher)

    if (!data) return <div className={"flex justify-center items-center w-full h-full animate-spin text-gray-200"}>
        <ArrowSync24Regular className={"w-1/3 h-1/3"}/>
    </div>

    if (error || data.status == 404) return <div className={"flex justify-center items-center h-full text-2xl text-gray-200"}>failed to load or not found.</div>

    const {name, size, createdDateTime, lastModifiedDateTime, "@microsoft.graph.downloadUrl": dl, thumbnails}: dataType = data

    return (
        <div className={"flex flex-col lg:flex-row justify-center items-center w-full h-full p-2 space-y-4 lg:space-x-4 text-gray-200"}>
            {thumbnails["0"] &&
                <img src={thumbnails["0"].large.url} alt={'thumbnails'} className={"h-1/2 lg:h-fit w-fit lg:w-1/2"}/>}
            {/*<Image src={thumbnails["0"].large.url} alt={'thumbnails'} width={thumbnails["0"].large.width / 2} height={thumbnails["0"].large.height / 2}/>}*/}
            <div className={"flex justify-center items-center h-fit w-full lg:w-1/2 flex flex-col space-y-2 truncate"}>
                <div className={"text-2xl"}>{name}</div>
                <div>{ConvertB(size)}</div>
                <div>createdDateTime: {createdDateTime}</div>
                <div>lastModifiedDateTime: {lastModifiedDateTime}</div>
                <a href={dl} className={"hover:bg-white hover:bg-opacity-10"} download>
                    <ArrowDownload48Regular/></a>
            </div>
        </div>
    )
}
