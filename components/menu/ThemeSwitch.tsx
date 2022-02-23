import {useEffect, useState} from 'react'
import {useTheme} from 'next-themes'

import {WeatherMoon48Regular, WeatherSunny48Regular} from "@fluentui/react-icons";


export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme, resolvedTheme} = useTheme()

    useEffect(() => setMounted(true), [])

    return (
        <button className="w-12 h-12 rounded text-ob dark:text-ow hover:bg-ow hover:bg-opacity-20"
                onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <WeatherSunny48Regular/> : <WeatherMoon48Regular/>}
        </button>
    )
}

