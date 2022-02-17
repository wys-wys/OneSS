import Image from "next/image";
import {useTheme} from "next-themes";

import OneSS_L from '@/public/OneSS_L.svg'
import OneSS_D from '@/public/OneSS_D.svg'


const LogoUrl = {
    light: OneSS_L.src,
    dark: OneSS_D.src
}

export default function Logo() {
    const {theme, resolvedTheme} = useTheme()
    const LogoComponents = theme === 'dark' || resolvedTheme === 'dark' ? LogoUrl.dark : LogoUrl.light


    return (
        <div className={"w-full h-full pl-8"}>
            <Image src={LogoComponents} width={624} height={600} layout={"fixed"} alt={'OneSS'}/>
        </div>
    )
}