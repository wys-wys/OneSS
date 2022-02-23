import {useEffect, useState} from 'react'
import {useTheme} from 'next-themes'

import {WeatherMoon28Regular, WeatherSunny32Regular} from "@fluentui/react-icons";


export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme, resolvedTheme} = useTheme()

    useEffect(() => setMounted(true), [])

    return (
        <button className="w-8 h-8 rounded text-ob dark:text-ow hover:bg-ow hover:bg-opacity-20"
                onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <WeatherSunny32Regular/> : <WeatherMoon28Regular/>}
        </button>
    )
}

