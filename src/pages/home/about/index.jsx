import { MainText } from "../../../elements/texts/main-text";
import { MainTitle } from "../../../elements/title/main-title";
import './index.css';

export function About(){
    return(
        <section className="px-[2%]">
            <div className="mx-auto max-w-[1280px] py-20">
                <div className="flex flex-col gap-8"> 
                    <MainTitle title={'SOBRE'} />
                    <div className="h-[2px] bg-gray opacity-20"></div>
                </div>
                <div className="flex flex-col lg:flex-row py-8 gap-16 justify-between   ">
                    <p className="lg:w-[60%] dark:text-white font-medium sm:text-3xl text-2xl leading-relaxed">Sou desenvolvedor independente com ampla experiência em projetos personalizados para empresas no Rio de Janeiro, atuando na criação de soluções digitais que atendem às necessidades específicas de cada cliente. </p>
                    <p className={" lg:w-[36%] text-base leading-loose text-gray dark:text-white"}>
                        Engenheiro de software instusiasta por tecnologia com familiaridade em 
                            <strong className="font-bold text-[#575757] dark:text-[#fff]"> Java, Spring, Javascript, Typescript, Node, React, Tailwind, SQL, MySQL e PostgreSQL. </strong> 
                        Sou apaixonado por trabalhar em projetos significativos que tenham um impacto positivo na vida das pessoas.
                        <br></br>
                        <br></br>
                        Tenho experiência prática trabalhando no desenvolvimento de  aplicações web e na criação e integração de APIs.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-end gap-16">
                    <p className="text-base font-medium leading-loose text-black dark:text-white">
                        Development web
                        <br></br>
                        UX/UI & Design
                    </p>
                    <div className="flex gap-16">
                        <div className="wrapper-line">
                            <a className="inline-block text-base font-medium leading-loose text-black dark:text-white" href="https://github.com/AlexandreZenas">Explore Github</a>
                            <img className="inline-block dark:hidden pl-4 text-whit " src="arrow.svg" alt="" />
                            <img className=" pl-4 text-whit hidden dark:inline-block " src="arrow-white.svg" alt="" />
                            <div className="w-full h-[2px] bg-[#969696] rounded-3xl">
                                <div className="line w-[0%] h-full bg-black dark:bg-white rounded-3xl"></div>
                            </div>
                        </div>
                        <div className="wrapper-line">
                            <a className="inline-block text-base font-medium leading-loose text-black dark:text-white" href="https://www.linkedin.com/in/alexandre-zenas-819b3163/">Explore LinkedIn</a>
                            <img className="inline-block dark:hidden pl-4 text-whit " src="arrow.svg" alt="" />
                            <img className=" pl-4 text-whit hidden dark:inline-block " src="arrow-white.svg" alt="" />
                            <div className="w-full h-[2px] bg-[#969696] rounded-3xl">
                                <div className="line w-[0%] h-full bg-black dark:bg-white rounded-3xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}