import Link from "next/link";

import customSetting from "@/setting/customSetting";
import {VscMail} from "react-icons/vsc";


export default function Footer() {
    return (
        <footer className="footer p-4 bg-base-300 text-base-content">
            <div className="items-center grid-flow-col">
                <div className={'w-8 h-8'}>
                    <svg viewBox="0 0 624 624" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="500" cy="388" r="124" fill="#1F7EFE" fillOpacity="0.8"/>
                        <path d="M200 357.5C200 277.143 265.143 212 345.5 212H354.5C434.857 212 500 277.143 500 357.5V512H345.5C265.143 512 200 446.857 200 366.5V357.5Z"
                              fill="#1F7EFE"
                              fillOpacity="0.8"/>
                        <path d="M0 312C0 201.543 89.5431 112 200 112C310.457 112 400 201.543 400 312V512H200C89.5431 512 0 422.457 0 312Z" fill="#0360E4" fillOpacity="0.8"/>
                    </svg>
                </div>
                <p> © {new Date().getFullYear()} - <Link href={customSetting.footer.link}>
                    <a target="_blank" className={'link link-hover'}>{customSetting.footer.name}</a></Link>
                </p>
            </div>

            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">

                <Link href={`mailto:${customSetting.mail}`}>
                    <a target={'_blank'} className={'w-6 h-6 hover:text-info'}>
                        <VscMail className={'w-6 h-6'}/>
                    </a>
                </Link>

                <Link href={customSetting.bilibili}>
                    <a target={'_blank'} className={'w-6 h-6 hover:text-info'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="fill-current">
                            <path
                                d="M801 237l-51 .002 44-45c10-10 15-22.667 15-38s-5-28-15-38-22.667-15-38-15-28.333 5-39 15l-128 121H436l-129-121c-10-10-22.667-15-38-15s-28 5-38 15-15 22.667-15 38 5 28 15 38l44 45h-51c-46 1.333-83.833 17-113.5 47s-45.167 67.667-46.5 113v346c1.333 49.333 16.833 89.166 46.5 119.499S178 908.667 224 910h570c46-1.333 84-16.833 114-46.5S953.333 796 954 750V397c2-45.333-11.5-83-40.5-113S847 238.333 801 237zm45 506.002c-.667 16-6.504 29.667-17.504 41s-24.5 17-40.5 17h-557c-16 0-29.667-5.667-41-17s-17-25-17-41v-339c.667-16.667 6.334-30.334 17.001-41.001s24.334-16.334 41.001-17.001h557c16.667.667 30.334 6.334 41.001 17.001s16.334 24.334 17.001 41.001v339zm-500.004-282c-16 .667-29.504 6.5-40.504 17.5s-16.833 24.5-17.5 40.5v58c.667 16 6.334 29.5 17.001 40.5s24.334 16.5 41.001 16.5 30.334-5.5 41.001-16.5 16.334-24.5 17.001-40.5v-58c-.667-16-6.5-29.5-17.5-40.5s-24.5-16.833-40.5-17.5zm332.996 0c-16 .667-29.504 6.5-40.504 17.5s-16.833 24.5-17.5 40.5v58c.667 16 6.334 29.5 17.001 40.5s24.334 16.5 41.001 16.5 30.334-5.5 41.001-16.5 16.334-24.5 17.001-40.5v-58c-.667-16-6.5-29.5-17.5-40.5s-24.5-16.833-40.5-17.5z"/>
                        </svg>
                    </a>
                </Link>
            </div>
        </footer>
    )
}