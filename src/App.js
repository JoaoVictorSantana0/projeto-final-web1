// src/App.js
import React from 'react';
import './index.css';

import Cabecalho from './components/Cabecalho';
import TopoDaPagina from './components/TopoDaPagina';
import SecaoProjetos from './components/SecaoProjetos';
import SecaoContato from './components/SecaoContato';

function App() {
  return (
    <> {/* Fragmento React para agrupar elementos */}
      <Cabecalho />
      <main>
        <TopoDaPagina />
        <SecaoProjetos />
        <SecaoContato />
      </main>
      {/* Exemplo: <Rodape />  Se você criar um componente de rodapé */}
    </>
  );
}

export default App;