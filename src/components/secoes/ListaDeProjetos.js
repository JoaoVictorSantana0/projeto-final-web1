// src/components/secoes/GridProjetos.js
import React from 'react';
import CartaoProjeto from '../elementos/CartaoProjeto'; // Ajuste o caminho se necessário

// Este componente recebe a lista de projetos como uma prop
export default function GridProjetos({ projetos }) {
  return (
    <div className="projetos-grid">
      {projetos.map((projeto) => (
        <CartaoProjeto
          key={projeto.id}
          titulo={projeto.titulo}
          descricao={projeto.descricao}
          linkProjeto={projeto.linkProjeto}
          imagemPlaceholder={projeto.imagemPlaceholder}
        />
      ))}
    </div>
  );
}

