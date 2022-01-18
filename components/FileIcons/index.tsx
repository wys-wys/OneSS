import Folder from "./icons/Folder.svg"
import ArchiveFolder from "./icons/ArchiveFolder.svg"
import Picture from "./icons/Picture.svg"
import Video from "./icons/Video.svg"
import File from "./icons/File.svg"

import Download from "./icons/Download.svg"
import Share from "./icons/Share.svg"
import View from "./icons/View.svg"


const selectIcon: any = {
    folder: Folder,
    archiveFolder: ArchiveFolder,
    picture: Picture,
    video: Video,
    file: File,

    download: Download,
    share: Share,
    view: View
};

const FileIcons = ({kind, href}: { kind: string, href?: string }) => {

    const {src} = selectIcon[kind];

    if (!href) {
        return <img src={src} className={"w-8 h-8"} alt={kind}/>
    }

    return (
        <a target="_blank"
           rel="noopener noreferrer"
           href={href}
           className={"hover:bg-white hover:bg-opacity-30"}>
            <img src={src} className={"w-8 h-8"} alt={kind}/>
        </a>
    )
};

export default FileIcons;
