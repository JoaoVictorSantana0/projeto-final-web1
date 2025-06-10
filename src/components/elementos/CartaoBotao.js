// src/components/elementos/CartaoBotao.js
import React from 'react';

// Componente que recebe o 'linkProjeto' como prop
export default function CartaoBotao({ linkProjeto }) {
  // A lógica condicional que estava no CartaoProjeto agora vive aqui
  if (linkProjeto && linkProjeto !== "#") {
    // Se o link for válido, retorna uma tag de link <a>
    return (
      <a
        href={linkProjeto}
        className="cartao-projeto-link" // A classe CSS que estiliza como botão
        target="_blank"
        rel="noopener noreferrer"
      >
        Ir para projeto --&gt;
      </a>
    );
  } else {
    // Se o link não for válido, retorna um botão <button> desabilitado
    return (
      <button
        className="cartao-projeto-link"
        disabled
        style={{ opacity: 0.6, cursor: 'not-allowed' }}
      >
        Ir para projeto --&gt;
      </button>
    );
  }
}