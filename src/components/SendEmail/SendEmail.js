import './SendEmail.css';


export default function Contact() {
    return (
    <form id='inputsContainer'>
        <div className='sendEmailinputs'>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" ></input>
        </div>
        <div className='sendEmailinputs'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ></input>
        </div>
        <div className='sendEmailinputs msgContainer'>
            <label htmlFor="msg">Mensagem</label>
            <textarea id='msg'></textarea>
        </div>
        <div className=''>
            <button type='submit'>Enviar</button>
        </div>
    </form>
    );
  }
  