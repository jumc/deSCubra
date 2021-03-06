import React, { Component } from 'react';

import aboutimg1 from './img/about-1.jpg';
import logosquare from './img/logo-square.png';
import logorect from './img/logo-rect.png';

class About extends Component {
  //classe que da render na tela incial do site
  render() {
    return (
    <div>

    <div className="row">
      <div className="col s12 m8 l8 offset-m2 offset-l2 hide-on-med-and-down">
        <div className="card horizontal">
          <div className="card-image">
            <img src={aboutimg1} alt="Pessoas sentadas jogando" />
          </div>
          <div className="card-stacked">
            <div className="card-content valign-wrapper">
              <h5>Conhecer São Carlos nunca foi tão divertido! Com o <b>#deSCubra</b>, você vai aprender mais sobre a cidade, sua história e seus pontos mais importantes, resolvendo enigmas com os seus amigos durante suas caminhadas.</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="col s12 m8 l8 offset-m2 offset-l2 hide-on-large-only">
        <div className="card">
          <div className="card-image">
            <img src={aboutimg1} alt="Pessoas usando o aplicativo" />
          </div>
          <div>
            <div className="card-content valign-wrapper">
              <h5>Conhecer São Carlos nunca foi tão divertido! Com o <b>#deSCubra</b>, você vai aprender mais sobre a cidade, sua história e seus pontos mais importantes, resolvendo enigmas com os seus amigos durante suas caminhadas.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col s12 m4 l4 offset-m2 offset-l2 hide-on-med-and-down">
        <div className="card horizontal">
          <div className="card-image">
            <img src={logosquare} alt="logo descubra"/>
          </div>
          <div className="card-stacked">
            <div className="card-content valign-wrapper">
              <p>O <b>#deSCubra</b> é uma plataforma de guias turísticos gamificados preparados exclusivamente para a cidade de São Carlos.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col s12 m4 l4 offset-m2 offset-l2 hide-on-large-only">
        <div className="card">
          <div className="card-image">
            <img src={logorect} alt="logo descubra"/>
          </div>
          <div>
            <div className="card-content valign-wrapper">
              <p>O <b>#deSCubra</b> é uma plataforma de guias turísticos gamificados preparados exclusivamente para a cidade de São Carlos.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col s12 m4 l4">
        <div className="card-panel">
          <p>O propósito do projeto é tornar mais prática e divertida a familiarização com o ambiente em que os moradores de São Carlos se encontram. Durante um percurso, você explorará diferentes pontos da cidade e conhecerá detalhes históricas e curiosidades sobre cada ponto de parada.</p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col s12 m8 l8 offset-m2 offset-l2">
        <div className="card-panel">
          <p>O #deSCubra é um projeto universitário feito por alunos de graduação do curso de Ciências de Computação da Universidade de São Paulo (USP) ― campus São Carlos, para a disciplina de Engenharia de Software (SSC0130).</p>
        </div>
      </div>
    </div>

    </div>
    );
  }
}

export default About;
