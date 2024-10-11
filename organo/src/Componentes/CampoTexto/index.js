//import { useState } from 'react';
import './CampoTexto.css';
const CampoTexto= (props) => {

   const placeholderModificada = `${props.placeholder}...`;
   // const [valor, setValor]= useState ('Guilherme Silveira');
    const aoDigitado = (evento) => {
        //setValor(evento.target.value);
       //console.log(valor);
        props.aoAlterado(evento.target.value)
    }
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange= {aoDigitado} 
            required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto