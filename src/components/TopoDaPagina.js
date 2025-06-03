import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function TopoDaPagina() {
  return (
    <section id="inicio" className="topo-da-pagina">
      <div className="container topo-da-pagina-container">
        <div className="topo-da-pagina-texto">
          <h1>João Victor Souza Santana</h1>
          <p>Graduando em Ciências da Computação | Instituto Federal Baiano (IF Baiano)</p>
          <div className="icones-sociais">
            <a href="https://github.com/JoaoVictorSantana0" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/jv-ss-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:joaosou78@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="topo-da-pagina-imagem-wrapper">
          <div className="imagem-perfil-container">
            {/* Coloque sua foto 'foto-perfil.jpg' na pasta 'public/' do seu projeto CRA */}
            <img src="/foto-perfil.jpg" alt="Foto de Perfil de João Victor Souza Santana" className="imagem-perfil" />
          </div>
        </div>
      </div>
    </section>
  );
}