import {useCallback, useEffect, useState} from "react";

import giscus from "@/setting/giscusSetting";


export default function Comments() {
    const [enableLoadComments, setEnabledLoadComments] = useState(true)
    // const commentsTheme = theme === 'dark' || resolvedTheme === 'dark' ? "dark_high_contrast" : "light_high_contrast"

    const COMMENTS_ID = 'comments-container'

    const LoadComments = useCallback(() => {
        setEnabledLoadComments(false)
        const script = document.createElement('script')
        script.src = 'https://giscus.app/client.js'
        script.setAttribute('data-repo', giscus.repo)
        script.setAttribute('data-repo-id', giscus.repo_id)
        script.setAttribute('data-category', giscus.category)
        script.setAttribute('data-category-id', giscus.category_id)
        script.setAttribute('data-mapping', 'specific')
        script.setAttribute('data-term', giscus.term)
        script.setAttribute('data-reactions-enabled', '1')
        script.setAttribute('data-emit-metadata', '0')
        script.setAttribute('data-input-position', 'top')
        script.setAttribute('data-theme', 'dark')
        script.setAttribute('data-lang', 'en')
        script.setAttribute('crossOrigin', 'anonymous')
        script.async = true

        const comments = document.getElementById(COMMENTS_ID)
        if (comments) comments.appendChild(script)

        return () => {
            const comments = document.getElementById(COMMENTS_ID)
            if (comments) comments.innerHTML = ''
        }
    }, ['dark'])

    // Reload on theme change
    useEffect(() => {
        const iframe = document.querySelector('iframe.giscus-frame')
        if (!iframe) return
        LoadComments()
    }, [LoadComments])

    return (
        <div className="w-full p-14 text-center text-2xl">
            {enableLoadComments &&
                <button className={'px-2 rounded hover:bg-oBlack dark:hover:bg-oWhite hover:bg-opacity-20 dark:hover:bg-opacity-20'} onClick={LoadComments}>Load Comments...</button>}
            <div className="giscus" id={COMMENTS_ID}/>
        </div>
    )
}