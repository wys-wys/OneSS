import UserList from "@/components/menu/UserList";
import LinkList from "@/components/menu/LinkList";


export default function Menu() {
    return (
        <div className="navbar bg-base-100">
            <div className={'flex-1'}>
                <UserList/>
            </div>
            <div className="flex-none">
                <LinkList/>
            </div>
        </div>
    )
}