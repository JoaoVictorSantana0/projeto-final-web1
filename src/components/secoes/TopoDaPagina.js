// src/components/secoes/TopoDaPagina.js (CÓDIGO CORRIGIDO)

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

// Importando os novos componentes
import BlocoApresentacao from '../elementos/BlocoApresentacao';
import IconeSocial from '../elementos/IconeSocial';
import ImagemDePerfil from '../elementos/ImagemDePerfil';

// Lista de dados para as redes sociais (esta parte está correta)
const redesSociais = [
  {
    href: "https://github.com/JoaoVictorSantana0",
    label: "GitHub",
    Icone: <Github size={24} /> // Ajustei o tamanho para combinar com o estilo do CSS
  },
  {
    href: "https://linkedin.com/in/jv-ss-",
    label: "LinkedIn",
    Icone: <Linkedin size={24} />
  },
  {
    href: "mailto:joaosou78@gmail.com",
    label: "Email",
    Icone: <Mail size={24} />
  }
];

export default function TopoDaPagina() {
  return (
    // A classe "topo-da-pagina" que está no seu CSS será aplicada aqui
    <section id="inicio" className="topo-da-pagina">
      {/* O div do container principal, como definido no seu CSS */}
      <div className="container">
        {/*
          ESTE É O DIV QUE PRECISA DA CLASSE CORRETA!
          Substituímos as classes do Tailwind pela que criamos: "topo-da-pagina-container"
        */}
        <div className="topo-da-pagina-container">

          {/* Parte do Conteúdo de Texto */}
          {/* A classe "topo-da-pagina-texto" será estilizada pelo seu CSS */}
          <div className="topo-da-pagina-texto">
            <BlocoApresentacao
              titulo="João Victor Souza Santana"
              subtitulo="Graduando em Ciências da Computação | Instituto Federal Baiano (IF Baiano)"
            />

            {/* Ícones Sociais */}
            {/* A classe "icones-sociais" será estilizada pelo seu CSS */}
            <div className="icones-sociais">
              {redesSociais.map((rede) => (
                // O componente IconeSocial pode não ser mais necessário se o estilo estiver no 'a'
                // mas vamos mantê-lo por organização
                <IconeSocial key={rede.label} href={rede.href} ariaLabel={rede.label}>
                  {rede.Icone}
                </IconeSocial>
              ))}
            </div>
          </div>

          {/* Parte da Imagem de Perfil */}
          {/* A classe "topo-da-pagina-imagem-wrapper" está no seu CSS e será aplicada aqui */}
          <div className="topo-da-pagina-imagem-wrapper">
            <ImagemDePerfil 
              src="/foto-perfil.jpg" 
              alt="Foto de Perfil de João Victor Souza Santana" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}