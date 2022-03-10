import {useEffect} from "react";
import ReactDOM from "react-dom";


export default function SetUserName(userName: string) {
    useEffect(() => {
        ReactDOM.render(<>{userName}</>, document.getElementById('userName'));
    });
}