import React from 'react';
import './style.css';

function Title(props) {
  return (
      <h2 className={`title_component_global ${props.white && 'white'}`}>
        {props.title}
      </h2>
  )
}

export default Title;