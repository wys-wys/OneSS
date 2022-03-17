import {ReactElement} from "react";
// @ts-ignore
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactDOM from "react-dom";

export default function CopyButton({children, className, name, text}: { children: ReactElement, className: string, name: string, text: string }) {

    return (
        <CopyToClipboard text={text} onCopy={() => {
            ReactDOM.render(
                <>
                    <h3 className={"font-bold text-xl"}>{name} Copied !</h3>
                    <p className={"py-4 overflow-x-auto"}>{text}</p>
                </>,
                document.getElementById('copyDialog'));
        }}>
            <label htmlFor={"my-modal"} className={className}>{children}</label>
        </CopyToClipboard>
    )
}