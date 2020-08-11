import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQH67DpKX2IeHQ/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=XKcTsn86vpUKG-7yRA8syUm083-qfJdfXvc3gnQLvEw" alt="Victor Pagnozi" />
                <div>
                    <strong>Victor Pagnozi</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br /> <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
            <footer>
                <p>
                    Preço por hora
                <strong>R$ 30,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;