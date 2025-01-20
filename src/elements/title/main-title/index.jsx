import { twMerge } from "tailwind-merge";

export function MainTitle({title, titleStyle}){
    return(
        <h1 className={twMerge("font-medium sm:text-6xl text-4xl  text-black dark:text-white", titleStyle)}>{title}</h1>
    )
}