import './Projects.css';
import '../../components/Cases/Cases.css'
import { contentMainContainer } from '../../mocks/mocks';
import Container from '../../components/Container/Container';
import { dados } from '../../mocks/mocks';
import Cases from '../../components/Cases/Cases';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Projects() {
    return (
    <>
        <Navbar/>
        {contentMainContainer.slice(0,1).map((item, index) => <Container image={item.image} title={item.title} text={item.text} key={index}/>)}
        <section id='samples'>
            <div className='container'>
                <div className='samplesTitle'>
                    <div className='samplesLine'></div>
                    <h1>Projetos e Cases</h1>
                    <div className='samplesLine'></div>
                </div>
                <div className='sampleCases'>
                    {dados.map((item, index) => <Cases link={item.link} image={item.image} title={item.title} text={item.text} key={index}/>)}
                </div>
            </div>
        </section>
        <Footer/>
    </>
    );
  }
  