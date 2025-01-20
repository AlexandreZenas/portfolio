import { twMerge } from "tailwind-merge";

export function MainText({text, textStyle}){
    return(
        <p className={twMerge(" text-base leading-loose text-gray dark:text-white", textStyle)}>{text}</p>
    )
}