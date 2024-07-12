import MyPhoto from '../../components/Myphoto/Myphoto';

import Differentials from '../../components/Differentials/Differentials';
import Technologies from '../../components/Technologies/Technologies';
import { dados } from '../../mocks/mocks';
import Cases from '../../components/Cases/Cases';
// import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import React, {useState, useRef, useEffect} from 'react';
import EmailForm from '../../components/EmailForm/EmailForm';
import './Home.css';
import '../../components/animations/KeyFrames.css'

export default function Home() {

    //função para dar visibilide as classes conforme a página vai sendo scrollada.
    //Tirei a animação porém deixei o código para ter como exemplo.

    const [ sliderAnimation, setSliderAnimation] = useState('');
    const whoInContentRef = useRef();
    //Se der um console. log aq, o useRef está retornará undefined, ele só renderiza na ref do html, la em baixo.  
    function sliderScroll(){
        const windowTop = window.scrollY + ((window.innerHeight * 7) / 10);
        // console.log('wintop ' + windowTop);
        if((windowTop) > whoInContentRef.current?.offsetTop){
            //usamos a interrogação para subir o valor recebido no html
            setSliderAnimation('whoImContent');
        }
        else{
            setSliderAnimation('');
        }
   };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            sliderScroll();             
        });
    });

    return (
    <>
        {/* <Navbar/>  deixei o banner principal com 100vh  */}
        <main id='mainBanner'   >
            <div className='container'>
                <div className='mainTitles'>
                    <h1>Alexandre Zenas</h1>
                    <h2>Desenvolvedor</h2><h2>web</h2>
                    <p>Especializado em programação Front-End e
                    Designer de interfaces.</p>
                </div>
            </div>
        </main>
        <section id='whoIm'>
            <div className='container'>
                <div className={`whoImContent ${sliderAnimation}`} ref={whoInContentRef}>
                    <div className='ContainerContent'>
                        <MyPhoto/>
                        <div className='Skills'>
                                <h1>Skills e Power Up's</h1>
                                <Technologies/>
                        </div>
                    </div>                    
                    <div className='whoImtitles'>
                        <h1>Um pouquinho sobre mim</h1>
                        <MyPhoto/>
                        <p>
                        Minha jornada no universo da programação começou em madrugadas repletas de códigos, descobrindo um prazer na criação de interfaces e pela resolução de problemas de forma criativa, tornando-me agora um entusiasta em tecnologia.
                        </p>                                        
                        <p>
                        Cursei Análise e Desenvolvimento de Sistemas na Universidade Veiga de Almeida, onde adquiri uma base sólida em lógica de programação. Além disso, busquei constantemente aprimorar minhas habilidades por meio de diversos cursos de programação front-end, que retratam tecnologias como javascript e react.js, me permitindo criar funcionalidades, componentes e experiências interativas.
                        </p>                                        
                        <p>
                        Agora, estou empenhado em expandir meus conhecimentos em busca de novas tecnologias e ajudar as pessoas na resolução de problemas. Estou entusiasmado para trabalhar em projetos que me desafiem a crescer, criar interfaces incríveis e ajudar a transformar ideias em realidade. 
                        </p>                                        
                    </div>
                </div>
                <Differentials></Differentials>
            </div>
        </section>
        <section id='samples'>
            <div className='container'>
                <div className='samplesTitle'>
                    <div className='samplesLine'></div>
                    <h1>Alguns dos meus projetos</h1>
                    <div className='samplesLine'></div>
                </div>
                <div className='sampleCases'>
                    {dados.slice().map((item, index) => <Cases link={item.link} image={item.image} title={item.title} text={item.text} key={index}/>)}
                </div>
            </div>
        </section>
        <section id='sendEmail'>
            <div className='container'>
                <div className='sendEmailTitle'>
                    <h2>Me envie um email</h2>
                </div>
                <EmailForm/>
            </div>
        </section>
        <Footer/>
    </>

    );
  }
  