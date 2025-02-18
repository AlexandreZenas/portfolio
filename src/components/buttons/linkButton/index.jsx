export function LinkButton({link, textLink, target }){
    return(
    <div className="wrapper-line">
        <a className="inline-block text-base font-medium leading-loose text-black dark:text-white" target={target} href={link}>{textLink}</a>
        <img className="inline-block dark:hidden pl-4 text-whit " src="arrow.svg" alt="" />
        <img className=" pl-4 text-whit hidden dark:inline-block " src="arrow-white.svg" alt="" />
        <div className="w-full h-[2px] bg-[#969696] rounded-3xl">
            <div className="line w-[0%] h-full bg-black dark:bg-white rounded-3xl"></div>
        </div>
    </div>
    )
}