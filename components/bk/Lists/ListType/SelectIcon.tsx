import FileIcons from "../../FileIcons";

export default function SelectIcon({mimeType}: { mimeType: string }) {

    if (mimeType.indexOf("image") != -1) {
        return <FileIcons kind={"picture"}/>
    }

    if (mimeType.indexOf("video") != -1) {
        return <FileIcons kind={"video"}/>
    }

    if (mimeType.indexOf("zip") != -1) {
        return <FileIcons kind={"archiveFolder"}/>
    }

    return <FileIcons kind={"file"}/>
}