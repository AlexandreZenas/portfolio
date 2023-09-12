import './Cases.css'

export default function Cases ({link, image, title, text}) {

    // criar uma container com todos os cases e um com só 3, fazendo dois componentes
    return (
        <a id="cases" href={link} rel="noopener noreferrer">
            <div className="casesImg">
                <div className='openCase'>ver mais</div>
                <img src={image}  alt={title}/>
            </div>
            <div className="casesTexts">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </a>
    );
};