// src/components/elementos/CartaoProjeto.js (versão refatorada)
import React from 'react';

// Importando os novos componentes que acabamos de criar
import CartaoConteudo from './CartaoConteudo';
import CartaoBotao from './CartaoBotao';

// O componente principal continua recebendo todas as props...
export default function CartaoProjeto({ titulo, descricao, imagemPlaceholder, linkProjeto }) {
  return (
    <article className="cartao-projeto">
      <div className="cartao-projeto-imagem">
        {imagemPlaceholder ? (
          <span>{imagemPlaceholder}</span>
        ) : (
          <img src="/imagens-placeholder/default-projeto.png" alt={`Imagem do projeto ${titulo}`} />
        )}
      </div>
      <div className="cartao-projeto-info">
        {/* ...mas agora ele DELEGA a responsabilidade para os componentes filhos */}

        {/* Usa o componente CartaoConteudo para mostrar o título e a descrição */}
        <CartaoConteudo titulo={titulo} descricao={descricao} />

        {/* Usa o componente CartaoBotao para mostrar o botão/link */}
        <CartaoBotao linkProjeto={linkProjeto} />
      </div>
    </article>
  );
}