
import React, { useState } from "react";

// CSS
import './style.css';

function Newsletter() {

    var data = '';
    const [send, setSend] = useState(false);
    const [notSend, setNotSend] = useState(false);
    const [valid,setValid] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const nameRegex = /^[A-ZÀ-Ÿ][a-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/

    function handleNameChange(e) {
        setName(e.target.value);
        setNameError('');
        setValid(true);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
        setEmailError('');
        setValid(true);
    }

    function closeModal(e) {
        e.preventDefault();
        setSend(false);
        setNotSend(false);
        setValid(false);
        setNameError('');
        setEmailError('');
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (name === '' || nameRegex.test(name)===false) {
            setNameError('Preencha com seu nome completo');
            setValid(false);
        } else {
            setNameError('');
            setValid(true);

            if (email === '' || emailRegex.test(email)===false) {
                setEmailError('Preencha com um e-mail válido');
                setValid(false);
            } else {
                setEmailError('');
                setValid(true);
                
                if (valid === true && emailError === '' && nameError === '') {

                    var requestOptions = {
                        method: 'POST',
                        body: JSON.stringify({email: email, name: name}),
                    };
            
                    fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        data = JSON.parse(result)
                        if (data.status === 'error') {
                            setName('');
                            setEmail('');
                            setSend(false);
                            setNotSend(true);
                        }
                        if (data.status === 'success') {
                            setName('');
                            setEmail('');
                            setSend(true);
                            setNotSend(false);
                        }
                    })
                    .catch(error => console.log('error', error));
        
                }
            }      
            
        }

    }

    return (

        <div className="newsletter_layout_global">

            <div className="limit">

                <h2>Participe de nossas news com promoções e novidades!</h2>

                <form>
                    
                    <div>
                        <input type="text" aria-label="Digite seu nome completo aqui" placeholder="Digite seu nome" value={name} data-invalid={nameError !== '' ? true : false} onChange={(e) => handleNameChange(e)} />
                        <span>{nameError}</span>    
                    </div>
                    
                    <div>
                        <input type="email" aria-label="Digite seu e-mail aqui" placeholder="Digite seu email" value={email} data-invalid={emailError !== '' ? true : false} onChange={(e) => handleEmailChange(e)} />
                        <span>{emailError}</span> 
                    </div>

                    <div>
                        <input type="submit" aria-label="Clique aqui para mandar seu nome e email e ficar por dentro de nossas novidades" value="Eu quero!" data-valid={valid} onClick={(e) => handleSubmit(e)} />
                    </div>

                </form>

            </div>

            {send && (
                <div className="newsletter_layout_global_tanks">
                    <h3>Seu e-mail foi cadastrado com sucesso!</h3>
                    <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                    <a href="https://corebiz-test.herokuapp.com/" onClick={(e) => closeModal(e)}>Cadastrar novo e-mail</a>
                    
                </div>
            )}

            {notSend && (
                <div className="newsletter_layout_global_tanks">
                    <h3>Problemas para receber seus dados.</h3>
                    <p>Identificamos que faltam dados a serem recebidos, tente novamente mais tarde</p>
                    <a href="https://corebiz-test.herokuapp.com/" onClick={(e) => closeModal(e)}>Tentar novamente</a>
                </div>
            )}

        </div>

    )

}

export default Newsletter;