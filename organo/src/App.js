import { useState } from 'react';
import './App.css';
import Time from './Componentes/Time';
import Banner from './Componentes/Banner/Banner';
import Formulario from './Componentes/Formulario';

function App() {

  const times =[
    {
        nome: 'Programação',
        corPrimaria: '#57C278',
        corSecundaria: '#09F7E9'
    },
    {
        nome: 'Front-end',
        corPrimaria: '#82CFFA',
        corSecundaria: '#EBF8FF'
    },
    {
        nome: 'Data Scence',
        corPrimaria: '#A60157',
        corSecundaria: '#F8F8E2'
    },
    {
        nome: 'Devops',
        corPrimaria: '#E06869',
        corSecundaria: '#FDE7E8'
    },
    {
        nome: 'UX e Design',
        corPrimaria: '#FAE9F5',
        corSecundaria: '#DB6EBF'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFFD09',
      corSecundaria: '#DB6EBF'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FBBA29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState ([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
   // console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    
      <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)}  aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado (colaborador)}/>
        
      {times.map(time => <Time
      key= {time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores= {colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)};
      </div>

  )
      
}

export default App;
