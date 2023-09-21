import MyPhoto from '../../components/Myphoto/Myphoto';
import Technologies from '../../components/Technologies/Technologies';
import Differentials from '../../components/Differentials/Differentials';
import { dados } from '../../mocks/mocks';
import Cases from '../../components/Cases/Cases';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Home.css';

export default function Home() {
    return (
    <>
        <Navbar/>
        <main id='mainBanner'   >
            <div className='container'>
                <div className='mainTitles'>
                    <h1>Alexandre Zenas</h1>
                    <h2>Desenvolvedor</h2> <h2>&</h2><h2>Designer</h2>
                    <p>Especializado em programação Front-End e <br></br>
                    Designer de interfaces.</p>
                </div>
            </div>
        </main>
        <section id='whoIm'>
            <div className='container'>
                <div className='whoImContent'>
                    <MyPhoto/>
                    <div className='ContainerContent'>
                        <div className='whoImtitles'>
                            <h1>Um pouquinho sobre mim</h1>
                            <MyPhoto/>
                            <p>
                            Minha jornada no universo da programação e design começou durante a pandemia, quando o lockdown me permitiu mergulhar em madrugadas repletas de códigos, descobrindo um amor pela criação de belas interfaces e pela resolução de problemas de forma criativa e, tornando-me agora um entusiasta em tecnologia.
                            </p>
                        </div>                        
                        <div className='Skills'>
                            <h1>Skills e Power Up's</h1>
                            <Technologies/>
                        </div>
                    </div>
                </div>
                <Differentials/>
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
                    {dados.slice(0 ,3).map((item, index) => <Cases link={item.link} image={item.image} title={item.title} text={item.text} key={index}/>)}
                </div>
            </div>
        </section>
        <Footer/>
    </>

    );
  }
  