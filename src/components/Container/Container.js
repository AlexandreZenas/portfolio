import './Container.css';


export default function Container({title, text, image}) {
    return (
        <section id='containerMain'>
            <div className='container'>
                <div className='containerMainTitles'>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
                <div className='containerMainImage'>
                    <img src={image} alt={title}></img>
                </div>
            </div>
        </section>
    );
  }
  