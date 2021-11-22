import React from 'react';
import './style.css';

function Cta(props) {
  return (
    <a className="cta_component_global" href={props.link} aria-label={props.acessibility}>
        <img aria-hidden="true" src={props.img} alt="no-description" />
        <p aria-hidden="true">{props.text}</p>
    </a>
  )
}

export default Cta;