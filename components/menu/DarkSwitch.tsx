import {useEffect, useState} from 'react'
import {useTheme} from 'next-themes'
import {BsMoonStars, BsSun} from "react-icons/bs";


export default function DarkSwitch() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme, resolvedTheme} = useTheme()

    useEffect(() => setMounted(true), [])

    return (
        <button className="w-8 h-8 flex items-center justify-center rounded text-ob dark:text-ow hover:bg-ow hover:bg-opacity-20"
                onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <BsMoonStars className={"w-7 h-7"}/> : <BsSun className={"w-7 h-7"}/>}
        </button>
    )
}

