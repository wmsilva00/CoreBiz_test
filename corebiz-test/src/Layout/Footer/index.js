import React from 'react';

//Component
import Title from '../../Components/Title';
import Cta from '../../Components/Cta';
import Credts from '../../Components/Credits';

// CSS
import './style.css';

//SVGs
import corebiz from '../../Svgs/corebiz-white.svg';
import vtex from '../../Svgs/vtex.svg';
import contact from '../../Svgs/contact.svg';
import contactonline from '../../Svgs/contact-online.svg';

function Footer() {

    return (

        <footer>

            <div className="limit">

                <div className="footer_location">

                    <Title title="Localização" white="true" />
                    
                    <p>Avenida Andrômeda, 2000. Bloco 6 e 8 </p>

                    <p>Alphavile SP</p>

                    <p><a href="mailto:brasil@corebiz.ag" aria-label="Clique aqui para mandar um email para brasil@corebiz.ag">brasil@corebiz.ag</a></p>

                    <p><a href="tel:+55 11 3090 1039" aria-label="Clique aqui para telefonar para +55 11 3090-1039">+55 11 3090 1039</a></p>
                    

                </div>

                <div className="footer_ctas">
                    
                    <Cta
                        link="mailto:brasil@corebiz.ag"
                        img={contact}
                        text="ENTRE EM CONTATO"
                    />

                    <Cta
                        link="#link_do_chat"
                        img={contactonline}
                        text="FALE COM O NOSSO CONSULTOR ONLINE"
                    />

                </div>

                <div className="footer_credts">

                    <Credts
                        acessibility="Criado pela CoreBiz"
                        img={corebiz}
                        text="Created by"
                    />
                    
                    <Credts
                        acessibility="Distribuído pela"
                        img={vtex}
                        text="Powered by"
                    />

                </div>

            </div>

        </footer>

    )

}

export default Footer;