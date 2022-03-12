import Image from "next/image";
import Link from "next/link";
import {getIconForFile} from "vscode-icons-js";

import {VscCloudDownload, VscCopy, VscLiveShare, VscOpenPreview} from "react-icons/vsc";

import convertB from "@/script/convert_bit";


export default function FileItem({user, name, size, id, index}: { user: string, name: string, size: number, id: string, index: number }) {
    return (
        <tr key={index}>

            {/*CheckBox*/}
            <th><label className={'flex items-center justify-end gap-2'}>{index+1}<input type="checkbox" className="checkbox"/></label></th>

            {/*Name*/}
            <td>
                <div className="flex items-center gap-2">
                    <Image className={'bg-oBlack dark:bg-oWhite bg-opacity-20 dark:bg-opacity-20 rounded'} src={'/VscIcons/' + getIconForFile(name)} width={32} height={32}
                           layout={"fixed"} alt={name}/>
                    <Link href={`/item/${user}/${id}`}>
                        <a target="_blank" className={'font-bold'}>{name}</a>
                    </Link>
                </div>
            </td>

            {/*Size*/}
            <td>{convertB(size)}</td>

            {/*Action*/}
            <td>
                <div className={"btn-group inline"}>
                    <button className={'btn btn-ghost'}>
                        <Link href={`/api/preview?user=${user}&id=${id}`}><a target="_blank"><VscOpenPreview className={"w-6 h-6"}/></a></Link>
                    </button>

                    <button className={'btn btn-ghost'} onClick={() => {
                        try {
                            navigator.clipboard.writeText(`https://${window.location.host}/item/${user}/${id}`)
                            alert(`Copied: https://${window.location.host}/item/${user}/${id}`)
                        } catch (e) {
                            alert('Failed to copy!')
                        }
                    }}>
                        <VscLiveShare className={'w-6 h-6'}/></button>

                    <button className={'btn btn-ghost'} onClick={() => {
                        try {
                            navigator.clipboard.writeText(`https://${window.location.host}/api/item/content?user=${user}&id=${id}`)
                            alert(`Copied: https://${window.location.host}/api/item/content?user=${user}&id=${id}`)
                        } catch (e) {
                            alert('Failed to copy!')
                        }
                    }}>
                        <VscCopy className={"w-6 h-6"}/></button>

                    <button className={'btn btn-ghost'}>
                        <a href={`/api/item/content?user=${user}&id=${id}`} download><VscCloudDownload className={"w-6 h-6"}/></a>
                    </button>
                </div>
            </td>
        </tr>
    )
}