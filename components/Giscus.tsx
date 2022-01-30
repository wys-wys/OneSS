const Giscus = () => {
    return (
        <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
            <div className="w-full my-8 giscus">
                <script src="https://giscus.app/client.js"
                        data-repo="Tualin14/OneSS"
                        data-repo-id="R_kgDOGe5t-w"
                        data-category="Announcements"
                        data-category-id="DIC_kwDOGe5t-84CA65K"
                        data-mapping="pathname"
                        data-reactions-enabled="1"
                        data-emit-metadata="0"
                        data-input-position="bottom"
                        data-theme="dark_protanopia"
                        data-lang="zh-CN"
                        crossOrigin="anonymous"
                        async>
                </script>
            </div>
        </div>

    )
}

export default Giscus