import Comments from "@/components/Comments";
import SetUserName from "@/components/SetUserName";
import giscusSetting from "@/setting/giscusSetting";


export default function Home() {

    SetUserName('OneSS')

    return (
        <div className={'flex flex-col md:flex-row items-center md:items-start'}>
            {giscusSetting.enabled && <Comments/>}
        </div>
    )
}
