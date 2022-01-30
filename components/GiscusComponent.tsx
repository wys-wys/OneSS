import dynamic from "next/dynamic";


const GiscusComponent = dynamic(
    () => {
        return import("@/components/Giscus")
    },
    {ssr: false}
)

export default GiscusComponent