import React from 'react';
import CartaoProjeto from './CartaoProjeto';

const listaDeProjetos = [
  {
    id: 1,
    titulo: "Sistema de Cadastro Simples com SQL",
    descricao: "Um sistema de cadastro utilizando SQL, desenvolvido com foco no Apex Oracle. Ideal para gerenciamento básico de dados.",
    imagemPlaceholder: "IMG_SQL", 
    linkProjeto: "https://github.com/JoaoVictorSantana0/sistema-cadastro-simples-sql"
  },
  {
    id: 2,
    titulo: "Portfólio de Engenheiro Civil", // NOVO TÍTULO
    descricao: "Um portfólio web para um engenheiro civil, destacando seus projetos, experiência e informações de contato. Desenvolvido com foco em HTML e CSS.", // NOVA DESCRIÇÃO
    imagemPlaceholder: "IMG_ENG", // Pode ser um placeholder ou o caminho para uma imagem real em public/
    linkProjeto: "https://github.com/JoaoVictorSantana0/portfolio-engenheiro/tree/master" // SEU NOVO LINK DO GITHUB
  },
  {
    id: 3,
    titulo: "Aplicativo Mobile de Produtividade", // Mantenha ou altere conforme necessário
    descricao: "Aplicativo mobile desenvolvido com React Native para gestão de tarefas...",
    imagemPlaceholder: "IMG3",
    linkProjeto: "#", // Link para o terceiro projeto
  },
];

export default function SecaoProjetos() {
  return (
    <section id="projetos" className="secao-projetos">
      <div className="container">
        <h2 className="titulo-secao">PROJETOS</h2>
        <div className="divisor-titulo"></div>
        <div className="projetos-grid">
          {listaDeProjetos.map((projeto) => (
            <CartaoProjeto
              key={projeto.id}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              linkProjeto={projeto.linkProjeto}
              imagemPlaceholder={projeto.imagemPlaceholder}
            />
          ))}
        </div>
      </div>
    </section>
  );
}