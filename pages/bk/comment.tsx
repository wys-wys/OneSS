import {useTheme} from "next-themes";
import Script from "next/script";
import giscus from "@/setting/giscusSetting";
import giscusSetting from "@/setting/giscusSetting";

export default function Comment() {
    const {theme, resolvedTheme} = useTheme()
    const commentsTheme = theme === 'dark' || resolvedTheme === 'dark' ? "dark_high_contrast" : "light_high_contrast"

    return (giscusSetting.enabled ?
            <>
                <div className="w-full my-8 p-4 giscus overflow-y-auto"/>
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
                        async/>
            </> :
            <div className={"flex justify-center items-center h-full text-2xl text-gray-900 dark:text-gray-200"}>Comments are not enabled</div>
    )
}