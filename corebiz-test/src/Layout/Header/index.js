
import React, { useState } from "react";

// Svgs
import menu from "../../Svgs/menu.svg";
import corebiz from "../../Svgs/corebiz.svg";
import cart from "../../Svgs/shop.svg";

// CSS
import './style.css';

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu(e) {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    return (

        <header className="header_layout_global">
            
            <div className="limit">

                <a href="#" className="menuMobile" onClick={(e)=>toggleMenu(e)}>
                    {isOpen 
                        ? <p>X</p>
                        : <img src={menu} alt="Fechar menu" />
                    }
                    
                </a>

                <img className="logo" src={corebiz} alt="CoreBiz" />

                <form>
                    <input type="text" placeholder="O que está procurando?" />
                    <input type="submit" value="" />
                </form>

                <div className="menuMyAccount" data-open={isOpen}>
                    <a href="#">Minha Conta</a>
                </div>

                <a href="#" className="cart">
                    <img src={cart} alt="no-description" />
                    <sup>2</sup>
                </a>

            </div>

        </header>

    )

}

export default Header;