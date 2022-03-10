import {useEffect} from 'react'
// @ts-ignore
import {themeChange} from 'theme-change'
import {VscChevronDown, VscSymbolColor} from "react-icons/vsc";


export default function ThemeSwitch() {
    useEffect(() => {
        themeChange(false)
    }, [])

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost gap-2 normal-case">
                <VscSymbolColor className={'w-6 h-6'}/>
                <span className="hidden md:inline">Change Theme</span>
                <VscChevronDown className={'w-6 h-6'}/>
            </label>
            <ul className="dropdown-content bg-base-200 text-base-content rounded-box top-px shadow-2xl menu menu-compact p-4 mt-14 w-48">
                <li>
                    <button data-set-theme="light" data-act-class="active">🌝 Light</button>
                </li>
                <li>
                    <button data-set-theme="dark" data-act-class="active">🌚 Dark</button>
                </li>
                <li>
                    <button data-set-theme="corporate" data-act-class="active">🏢 Corporate</button>
                </li>
                <li>
                    <button data-set-theme="aqua" data-act-class="active">🐟 Aqua</button>
                </li>
                <li>
                    <button data-set-theme="night" data-act-class="active">🌙 Night</button>
                </li>
                <li>
                    <button data-set-theme="coffee" data-act-class="active">☕️ Coffee</button>
                </li>
                <li>
                    <button data-set-theme="winter" data-act-class="active">❄️ Winter</button>
                </li>
            </ul>
        </div>
    )
}

