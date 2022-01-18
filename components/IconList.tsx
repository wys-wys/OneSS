import {BsFilm, BsGithub, BsMusicNoteBeamed} from "react-icons/bs";
import iconList from "../setting/iconList";

const IconList = () => {
    return <div className={"fixed right-0 bottom-0 flex flex-row justify-center items-center p-2 space-x-2"}>
        <a href={iconList.Music}><BsMusicNoteBeamed className={"text-4xl hover:bg-white hover:bg-opacity-20"}/></a>
        <a href={iconList.Video}><BsFilm className={"text-4xl hover:bg-white hover:bg-opacity-20"}/></a>
        <a href={iconList.Github}><BsGithub className={"text-4xl hover:bg-white hover:bg-opacity-20"}/></a>
    </div>
}

export default IconList
