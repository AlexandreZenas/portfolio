import { MainText } from "../../../elements/texts/main-text";
import { MainTitle } from "../../../elements/title/main-title";
import './grid.css'

export function Experience(){
    return(
        <section id="sobre" className="px-[2%]">
            <div className="mx-auto max-w-[1280px] py-20 flex flex-col gap-12">
                <div className="flex flex-col gap-8"> 
                    <MainTitle title={'EXPERIÊNCIAS'} />
                    <div className="h-[2px] bg-gray opacity-20 "></div>
                </div>
                <div className=" grid-container ">
                    <MainTitle title={'ImpulseOn Agency'} titleStyle={'pb-12 sm:text-5xl text-3xl'}/>                   
                    <div className="">
                        <p className="text-gray">Agênca Digital</p>
                        <p className="text-gray">04/2024 — Present</p>
                    </div>
                    <div className=" grid-table ">
                        <p className="text-gray">Position</p>
                        <p className="dark:text-white">Desenvolvedor FullStack</p>
                        <p className="text-gray">Location</p>
                        <p className="dark:text-white">Rio de Janeiro - RJ</p>
                        <p className="text-gray">Industry</p>
                        <p className="dark:text-white">Marketing e desenvolvimento</p>
                        <p className="text-gray">Website</p>
                        <p className="dark:text-white">www.impulseonagency.com</p>
                    </div>
                    <MainText text={'Desenvolvi projetos personalizados para diversas empresas no Rio de Janeiro, utilizando tecnologias de React, Node e Tailwind na criação das aplicações e APIs.'}/>
                    <MainText text={'A impulseOn é uma agência especializada em marketing digital e desenvolvimento, dedicada a ajudar empresas a se destacarem no ambiente online. Unimos estratégias criativas de marketing com soluções tecnológicas inovadoras para criar experiências digitais que impulsionam negócios.'}/>
                </div>
                <div className=" grid-container ">
                    <MainTitle title={'Mark 01 Soluções Tecnológicas'} titleStyle={'pb-12 sm:text-5xl text-3xl'}/>                   
                    <div className="">
                        <p className="text-gray">Empresa de infraestrutura de redes</p>
                        <p className="text-gray">11/2023 — 03/24</p>
                    </div>
                    <div className=" grid-table ">
                        <p className="text-gray">Position</p>
                        <p className="dark:text-white">Tecnico em infraestrutura</p>
                        <p className="text-gray">Location</p>
                        <p className="dark:text-white">Nova Iguaçu - RJ</p>
                        <p className="text-gray">Industry</p>
                        <p className="dark:text-white">Infraestrutura de redes</p>
                    </div>
                    <MainText text={'Atuei na infraestrutura de rede de uma rede de farmácias, realizando suporte técnico e manutenção de sistemas para garantir o funcionamento contínuo e eficiente. Utilizei ferramentas como TeamViewer para suporte remoto e GLPI para gestão de tickets e organização de demandas.'}/>
                    <MainText textStyle={'mt-4'} text={'Também fui responsável pelo monitoramento e manutenção do Windows Server 2012, assegurando a estabilidade do servidor e a segurança dos dados. Minha atuação contribuiu para a otimização da infraestrutura tecnológica e para o suporte às operações da rede.'}/>
                </div>
            </div>
        </section>
    )
}