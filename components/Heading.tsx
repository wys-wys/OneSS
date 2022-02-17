import {VscGithub} from "react-icons/vsc";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Heading() {

    return (
        <div className={"w-full h-20 flex flex-row items-center justify-end shadow-oy bg-oLpv dark:bg-oDpv"}>
            <div className={"w-full"}>
            </div>
            <IconList/>
        </div>
    )
}

function IconList() {
    return (
        <div className={"w-fit h-fit flex flex-row justify-center items-center space-x-2 p-2 text-ow"}>
            <ThemeSwitch/>
            <VscGithub className={"w-12 h-12"}/>
        </div>
    )

}