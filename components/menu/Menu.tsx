import {useState} from "react";

import UserList from "@/components/menu/UserList";
import IconList from "@/components/menu/IconList";


export default function Menu({userName}: { userName: string }) {
    const [userShow, setUserShow] = useState(false);

    const onToggle = () => {
        setUserShow((status) => {
            return !status;
        })
    }

    return (
        <>
            <div className={"w-full overflow-hidden h-16 px-2 flow flex flex-row items-center justify-end bg-opv text-ob dark:text-ow bg-opacity-90 dark:bg-opacity-40"}>
                <div className={"w-full text-4xl"}>
                    <div onClick={onToggle} className={'w-fit p-2 rounded hover:bg-ow hover:bg-opacity-20'}>
                        {userName}
                    </div>
                </div>
                <IconList/>
            </div>
            <UserList userShow={userShow}/>
        </>
    )
}