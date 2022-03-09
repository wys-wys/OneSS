import {useEffect} from 'react'
// @ts-ignore
import {themeChange} from 'theme-change'


export default function ThemeSwitch() {
    useEffect(() => {
        themeChange(false)
    }, [])

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost gap-2 normal-case">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                </svg>
                <span className="hidden md:inline">Change Theme</span>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" className="ml-1 inline-block h-4 w-4 fill-current">
                    <path
                        d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/>
                </svg>
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

