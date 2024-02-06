import React from 'react';

import Slider from 'react-slick';

import './Differentials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Differentials () {

    const settings = {
        dots: true,             // Exibir pontos indicadores
        infinite: true,         // Carrossel infinito
        speed: 500,             // Velocidade da animação (ms)
        slidesToShow: 4,        // Número de divs visíveis de uma vez
        slidesToScroll: 1,      // Número de divs a serem roladas
        initialSlide: 0,        // Slide inicial
        autoplay: true,         // Avançar automaticamente
        autoplaySpeed: 3500,    // Intervalo entre avanços automáticos (ms)
        cssEase: "linear",  
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]    
      };


    return(
        <Slider className='differentials' {...settings}>
            <div className='differentialsContent'>
                <img src={'assets/icons/code.svg'} alt='icon code'/>
                <h3>Clean code</h3>
                <p>Manter um código limpo é fundamental <br></br>
                para  um projeto de desenvolvimento</p>
            </div>
            <div className='differentialsContent'>
                <img src={'assets/icons/laptop.svg'} alt='icon laptop'/>
                <h3>Interfaces de alta fidelidade</h3>
                <p>Precisão na implementação do design, <br></br>
                mantendo a integridade visual.</p>
            </div>
            <div className='differentialsContent'>
                <img src={'assets/icons/paint.svg'} alt='icon paint'/>
                <h3>Design customizado</h3>
                <p>Identidade e Profissionalismo é uma<br></br> 
                chave para se destacar na multidão.</p>
            </div>
            <div className='differentialsContent'>
                <img src={'assets/icons/animation.svg'} alt='icon gears animation'/>
                <h3>animações interativas</h3>
                <p>Uma navegação dinâmica constrói uma <br></br>
                conexão com o usuário.</p>
            </div>
            <div className='differentialsContent'>
                <img src={'assets/icons/gears.svg'} alt='icon gears'/>
                <h3>Funcionalidades personalizadas</h3>
                <p>Automatização de processos que <br></br>dinamizam
                o fluxo de produção.</p>
            </div>
        </Slider>
    );
};