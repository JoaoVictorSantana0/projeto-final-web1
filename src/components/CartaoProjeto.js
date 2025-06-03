// src/components/CartaoProjeto.js
import React from 'react';

// Certifique-se de que 'linkProjeto' está sendo recebido como prop
export default function CartaoProjeto({ titulo, descricao, imagemPlaceholder, linkProjeto }) {
  return (
    <article className="cartao-projeto">
      <div className="cartao-projeto-imagem">
        {imagemPlaceholder ? (
          <span>{imagemPlaceholder}</span>
        ) : (
          // Considere usar uma imagem padrão se 'imagemPlaceholder' não for apenas texto
          <img src="/imagens-placeholder/default-projeto.png" alt={`Imagem do projeto ${titulo}`} />
        )}
      </div>
      <div className="cartao-projeto-info">
        <h3>{titulo}</h3>
        <p>{descricao}</p>

        {/* Verifica se 'linkProjeto' existe e não é apenas "#".
          Se sim, renderiza um link (<a>).
          Se não, renderiza um botão desabilitado ou nenhuma ação.
        */}
        {linkProjeto && linkProjeto !== "#" ? (
          <a
            href={linkProjeto}
            className="cartao-projeto-link" // A classe CSS que você já estilizou como botão
            target="_blank" // Para abrir o link em uma nova aba
            rel="noopener noreferrer" // Medida de segurança para links em nova aba
          >
            Ir para projeto --&gt;
          </a>
        ) : (
          <button
            className="cartao-projeto-link"
            disabled // Botão desabilitado se não houver link
            style={!linkProjeto || linkProjeto === "#" ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
          >
            Ir para projeto --&gt;
          </button>
        )}
      </div>
    </article>
  );
}