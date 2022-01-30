import Script from 'next/script';

const Giscus = () => {
    return (
        <>
            <div className="w-full my-8 p-4 giscus"/>
            <Script src="https://giscus.app/client.js"
                    data-repo="Tualin14/OneSS"
                    data-repo-id="R_kgDOGe5t-w"
                    data-category="Announcements"
                    data-category-id="DIC_kwDOGe5t-84CA65K"
                    data-mapping="specific"
                    data-term="Welcome to OneSS!"
                    data-reactions-enabled="1"
                    data-emit-metadata="0"
                    data-input-position="top"
                    data-theme="dark_high_contrast"
                    data-lang="zh-CN"
                    crossOrigin="anonymous"
                    async/>
        </>
    )
}

export default Giscus