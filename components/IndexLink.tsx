import customSetting from "@/setting/customSetting";
import {VscMail, VscTwitter} from "react-icons/vsc";

export default function IndexLink() {
    const link = customSetting.link
    return (
        <>
            {link.mail.enable && <button className={"btn btn-ghost btn-square hover:text-info"}>
                <a href={`mailto:${link.mail.link}`} target={'_blank'} className={'w-8 h-8'} rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                </a>
            </button>}

            {link.twitter.enable && <button className={"btn btn-ghost btn-square hover:text-info"}>
                <a href={link.twitter.link} target={'_blank'} className={'w-8 h-8'} rel="noreferrer">
                    <VscTwitter className={'w-8 h-8'}/>
                </a>
            </button>}

            {link.bilibili.enable && <button className={"btn btn-ghost btn-square hover:text-info"}>
                <a href={link.bilibili.link} target={'_blank'} className={'w-8 h-8 hover:text-info'} rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="fill-current">
                        <path
                            d="M801 237l-51 .002 44-45c10-10 15-22.667 15-38s-5-28-15-38-22.667-15-38-15-28.333 5-39 15l-128 121H436l-129-121c-10-10-22.667-15-38-15s-28 5-38 15-15 22.667-15 38 5 28 15 38l44 45h-51c-46 1.333-83.833 17-113.5 47s-45.167 67.667-46.5 113v346c1.333 49.333 16.833 89.166 46.5 119.499S178 908.667 224 910h570c46-1.333 84-16.833 114-46.5S953.333 796 954 750V397c2-45.333-11.5-83-40.5-113S847 238.333 801 237zm45 506.002c-.667 16-6.504 29.667-17.504 41s-24.5 17-40.5 17h-557c-16 0-29.667-5.667-41-17s-17-25-17-41v-339c.667-16.667 6.334-30.334 17.001-41.001s24.334-16.334 41.001-17.001h557c16.667.667 30.334 6.334 41.001 17.001s16.334 24.334 17.001 41.001v339zm-500.004-282c-16 .667-29.504 6.5-40.504 17.5s-16.833 24.5-17.5 40.5v58c.667 16 6.334 29.5 17.001 40.5s24.334 16.5 41.001 16.5 30.334-5.5 41.001-16.5 16.334-24.5 17.001-40.5v-58c-.667-16-6.5-29.5-17.5-40.5s-24.5-16.833-40.5-17.5zm332.996 0c-16 .667-29.504 6.5-40.504 17.5s-16.833 24.5-17.5 40.5v58c.667 16 6.334 29.5 17.001 40.5s24.334 16.5 41.001 16.5 30.334-5.5 41.001-16.5 16.334-24.5 17.001-40.5v-58c-.667-16-6.5-29.5-17.5-40.5s-24.5-16.833-40.5-17.5z"/>
                    </svg>
                </a>
            </button>}

            {link.youtube.enable && <button className={"btn btn-ghost btn-square hover:text-info"}>
                <a href={link.youtube.link} target={'_blank'} className={'w-8 h-8 hover:text-info'} rel="noreferrer">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current">
                        <path
                            d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"/>
                    </svg>
                </a>
            </button>}
        </>
    )
}