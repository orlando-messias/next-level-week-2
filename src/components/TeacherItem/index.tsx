import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './teacherItemStyles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/52613749?s=460&u=5740f41f865cad8715d42dfb08d703dfe39a22d6&v=4" alt="pic" />
        <div>
          <strong>Orlando Messias</strong>
          <span>Developer</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias em web. <br /><br />
        Apaixonado por desenvolvimento e pela área da educação. Já trabalhou mais de 10 anos como instrutor de Informática.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;