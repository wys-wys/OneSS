import {useState} from "react";

import {VscAccount} from "react-icons/vsc";

import UserList from "@/components/menu/UserList";
import IconList from "@/components/menu/IconList";


export default function Menu() {
    const [userShow, setUserShow] = useState(false);

    const onToggle = () => {
        setUserShow((status) => {
            return !status;
        })
    }

    return (
        <>
            <div className={"fixed top-0 w-full h-12 px-2 flow flex flex-row items-center justify-end bg-opv text-ob dark:text-ow bg-opacity-90 dark:bg-opacity-40"}>
                <div className={"w-full text-2xl"}>
                    <button onClick={onToggle} className={'w-fit p-1 flex flex-row items-center space-x-2 rounded hover:bg-ow hover:bg-opacity-20'}>
                        <VscAccount className={'w-8 h-8'}/>
                        <div className={'hidden md:block'} id={'userName'}>OneSS</div>
                    </button>
                </div>
                <IconList/>
            </div>
            <UserList userShow={userShow}/>
        </>
    )
}