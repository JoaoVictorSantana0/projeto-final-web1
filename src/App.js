// src/App.js
import React from 'react';
import './index.css';

import Cabecalho from './components/layout/Cabecalho';
import TopoDaPagina from './components/secoes/TopoDaPagina';
import SecaoProjetos from './components/secoes/SecaoProjetos'; // <-- CAMINHO CORRIGIDO
import SecaoContato from './components/secoes/SecaoContato';

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