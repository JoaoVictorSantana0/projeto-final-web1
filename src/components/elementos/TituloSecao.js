// src/components/elementos/TituloSecao.js
import React from 'react';

// Este componente recebe a prop 'titulo' para exibir o texto do título.
export default function TituloSecao({ titulo }) {
  return (
    // Usamos um Fragmento (<>) para agrupar os elementos
    // sem adicionar um div extra desnecessário na página.
    <>
      <h2 className="titulo-secao">{titulo}</h2>
      <div className="divisor-titulo"></div>
    </>
  );
}