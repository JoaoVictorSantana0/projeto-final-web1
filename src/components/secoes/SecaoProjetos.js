// src/components/secoes/SecaoProjetos.js (versão refatorada)
import React from 'react';

// Importando as peças que vamos usar
import TituloSecao from '../elementos/CartaoConteudo'; // Ou '../elementos/TituloSecao' se estiver lá
import GridProjetos from './ListaDeProjetos';

// Importando os dados da nossa nova pasta
import { listaDeProjetos } from '../../dados/dadosListaProjeto';

export default function SecaoProjetos() {
  return (
    <section id="projetos" className="secao-projetos">
      <div className="container">
        {/* Peça 1: O Título da Seção */}
        <TituloSecao titulo="PROJETOS" />

        {/* Peça 2: A Grade de Projetos, recebendo os dados como prop */}
        <GridProjetos projetos={listaDeProjetos} />
      </div>
    </section>
  );
}

