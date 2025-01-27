import { twMerge } from "tailwind-merge";
import { MainText } from "../../../../elements/texts/main-text";

export function ProjectComponent({title, subtitle, text01, text02, text03, linkPath, link, imgPath, styleComponent}){
    return(
        <div className={twMerge("flex flex-col lg:flex-row justify-between lg:gap-12 py-12", styleComponent)}>
            <div className="flex flex-col py-8 lg:gap-8 gap-4 xl:w-1/3 items-start">
                <div className="flex flex-col gap-1">
                    <h2 className="font-medium text-xl lg::w-1/2 sm:w-4/5 dark:text-white">{title}</h2>
                    <h4 className="font-medium dark:text-white">{subtitle}</h4>
                </div>
                <MainText text={text01} />
                <MainText text={text02} />
                <MainText text={text03} />
                <div className="wrapper-line">
                    <a className="inline-block text-base font-medium leading-loose text-black dark:text-white" target="_blank" href={linkPath}>{link}</a>
                    <img className="inline-block dark:hidden pl-4 text-whit " src="arrow.svg" alt="" />
                    <img className=" pl-4 text-whit hidden dark:inline-block " src="arrow-white.svg" alt="" />
                    <div className="w-full h-[2px] bg-[#969696] rounded-3xl">
                        <div className="line w-[0%] h-full bg-black dark:bg-white rounded-3xl"></div>
                    </div>
                </div>
            </div>
            <img className="object-cover object-top  xl:w-4/6 w-full lg:max-h-[520px] max-h-[480px] lg:p-10 p-4 bg-[#09090B] " src={imgPath} alt="" />
        </div>
    )
}