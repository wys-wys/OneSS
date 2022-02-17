import {useTheme} from "next-themes";
import Script from "next/script";

import giscus from "@/setting/giscusSetting";


export default function Discussion() {
    const {theme, resolvedTheme} = useTheme()
    const commentsTheme = theme === 'dark' || resolvedTheme === 'dark' ? "dark_high_contrast" : "light_high_contrast"

    return (
        <div className="giscus w-2/3 h-5/6 p-2 overflow-y-auto">
            <Script src="https://giscus.app/client.js"
                    data-repo={giscus.repo}
                    data-repo-id={giscus.repo_id}
                    data-category={giscus.category}
                    data-category-id={giscus.category_id}
                    data-mapping={"specific"}
                    data-term={giscus.term}
                    data-reactions-enabled="1"
                    data-emit-metadata="0"
                    data-input-position="top"
                    data-theme={commentsTheme}
                    data-lang="en"
                    crossOrigin="anonymous"
                    async className={"dark:hidden"}/>
        </div>
    )
}