import './Contact.css';
import SendEmail from '../../components/SendEmail/SendEmail';
import { contentMainContainer } from '../../mocks/mocks';
import Container from '../../components/Container/Container';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Contact() {
    return (
    <>
        <Navbar/>
        {contentMainContainer.slice(2,3).map((item, index) => <Container image={item.image} title={item.title} text={item.text} key={index}/>)}
        <section id='sendEmail'>
            <div className='container'>
                <div className='sendEmailTitle'>
                    <h2>Me envie um email</h2>
                </div>
                <SendEmail/>
            </div>
        </section>
        <Footer/>
    </>
    );
  }
  