export function Hero(){
    return(
        <section className="px-[2%] ">
            <div className="mx-auto max-w-[1280px] py-20 gap-12 ">
                <div className="sm:w-4/5 lg:w-full flex flex-col h-[80vh] justify-center gap-12 lg:gap-24 mx-auto">
                    <h1 className="font-medium xl:text-[160px] lg:text-[140px] md:text-8xl sm:text-6xl text-5xl   text-black dark:text-white ">ALEXANDRE</h1>
                    <h1 className="font-medium xl:text-[160px] lg:text-[140px] md:text-8xl sm:text-6xl text-5xl  text-black dark:text-white text-right">ZENAS</h1>
                </div>
                <p className="font-medium text-xl lg::w-1/2 sm:w-4/5 dark:text-white">Desenvolvedor FullStack Independente voltado para desenvolvimento de aplicações web.</p>
            </div>
        </section>
    )
}