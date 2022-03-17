import {VscClose} from "react-icons/vsc";

export default function CopyDialog() {
    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle"/>
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal" className={"btn btn-sm btn-circle absolute right-2 top-2"}>
                        <VscClose className={'w-8 h-8'}/>
                    </label>
                    <div id={'copyDialog'}/>
                </div>
            </div>
        </>
    )
}