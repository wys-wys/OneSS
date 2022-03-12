import Link from "next/link";

import personalisedDefinition from "@/setting/personalisedDefinition";


export default function Footer() {
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
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
                <p> © {new Date().getFullYear()} • <Link href={personalisedDefinition.footer.link}>
                    <a target="_blank" className={'link link-hover'}>{personalisedDefinition.footer.name}</a></Link>
                </p>
            </div>
        </footer>
    )
}