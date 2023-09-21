import './About.css';
import { contentMainContainer } from '../../mocks/mocks';
import Container from '../../components/Container/Container';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function About() {
    return (
    <>
        <Navbar/>
        {contentMainContainer.slice(1,2).map((item, index) => <Container image={item.image} title={item.title} text={item.text} key={index}/>)}
        <Footer/>
    </>
    );
  }
  