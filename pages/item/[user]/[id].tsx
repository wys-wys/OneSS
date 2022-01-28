import {InferGetServerSidePropsType} from "next";

import getItemById from "@/script/get_item_by_id";
import {dataType} from "@/script/data_type";
import {ArrowDownload48Regular} from "@fluentui/react-icons";
import ConvertB from "@/script/convert_bit";


export default function ItemId({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const {name, size, id, createdDateTime, lastModifiedDateTime, "@microsoft.graph.downloadUrl": dl, thumbnails}: dataType = data
    return (
        !data ? <div className={"text-2xl text-gray-200"}>404 - Item Not Found</div> :
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

export const getServerSideProps = async (context: { query: { user: string, id: string }; }) => {
    const {user, id} = context.query
    const data = await getItemById(user, id)
    return {
        props: {
            data,
        },
    }
}
