import { MainText } from "../../../elements/texts/main-text";
import { MainTitle } from "../../../elements/title/main-title";
import { ProjectComponent } from "./project-component";

export function Projects(){
    return(
        <section className="px-[2%]">
            <div className="mx-auto max-w-[1280px] py-20 flex flex-col gap-12">
                <MainTitle title={'PROJECTS'} />
                <div className="h-[2px] bg-gray opacity-20 "></div>
                <ProjectComponent 
                    title={'ImpulseOn Agency'}
                    subtitle={'Agência digital focada na criação de websites e marketing.'}
                    text01={'This side project started from my personal interest in the effects of compound interest.'}
                    text02={'My goal was to create a simple, user-friendly tool that hides all the complexity — something people could use regularly.'}
                    text03={'The project was developed using TypeScript, React, Vite, and deployed on Cloudflare Pages.'}
                    imgPath={'projects/impulseOn.png'}
                    link={'impulseonagency.com'}
                    linkPath={'https://impulseonagency.com/'}
                />
                <ProjectComponent 
                    styleComponent={'lg:flex-row-reverse'}
                    title={'Quality Cleaning Bl'}
                    subtitle={'Empresa de limpeza em Destin, Florida.'}
                    text01={'This side project started from my personal interest in the effects of compound interest.'}
                    text02={'My goal was to create a simple, user-friendly tool that hides all the complexity — something people could use regularly.'}
                    text03={'The project was developed using TypeScript, React, Vite, and deployed on Cloudflare Pages.'}
                    imgPath={'projects/qualitycleaningbl.png'}
                    link={'qualitycleaningbl.com'}
                    linkPath={'https://qualitycleaningbl.com/'}
                />
                <ProjectComponent 
                    title={'Vidraçaria Silver Glass'}
                    subtitle={'Consolidada no rio de janeiro, com mais de 10 anos de história'}
                    text01={'This side project started from my personal interest in the effects of compound interest.'}
                    text02={'My goal was to create a simple, user-friendly tool that hides all the complexity — something people could use regularly.'}
                    text03={'The project was developed using TypeScript, React, Vite, and deployed on Cloudflare Pages.'}
                    imgPath={'projects/silverglass.png'}
                    link={'vidraçariasilverglass.com.br'}
                    linkPath={'https://xn--vidraariasilverglass-70b.com.br/'}
                />
            </div> 
        </section>
    )
}