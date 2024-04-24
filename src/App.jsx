
import './App.css'

import { Route, Routes } from 'react-router-dom';

import Cabecalho from "./componentes/Cabecalho";
import Rodape from './componentes/Rodape';
import Home from './paginas/Home';
import Cadastro from './paginas/Cadastro';
import ListaClientes from './paginas/ListaClientes';
import VagasDisponiveis from './paginas/VagasDisponiveis';

function App() {
  return (
    <div className='app'>
      <Cabecalho />
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Cadastro' element={<Cadastro />} />
          <Route path='/lista' element={<ListaClientes />} />
          <Route path='/Vagas' element={<VagasDisponiveis />} />
        </Routes>
      </main>
      <Rodape />
    </div>
  );
}

export default App;
