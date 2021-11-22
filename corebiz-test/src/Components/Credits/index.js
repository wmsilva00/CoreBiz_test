import React from 'react';
import './style.css';

function Credts(props) {
  return (
      <>
        <div className="credit_component_global" role="dialog" arial-label={props.acessibility}>
            <p aria-hidden="true">{props.text}</p>
            <img aria-hidden="true" src={props.img} alt="no-description" />
        </div>
      </>
  )
}

export default Credts;