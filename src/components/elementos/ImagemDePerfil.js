// src/components/elementos/ImagemDePerfil.js
import React from 'react';

// Componente que recebe o caminho da imagem (src) e o texto alternativo (alt)
export default function ImagemDePerfil({ src, alt }) {
  return (
    <div className="flex-shrink-0 mt-10 lg:mt-0">
      <div className="imagem-perfil-container"> {/* As classes de estilo do CSS continuam aqui */}
        {/* Usamos a tag <img> padrão do HTML/JSX em vez do <Image> do Next.js */}
        <img 
          src={src} 
          alt={alt} 
          className="imagem-perfil" 
        />
      </div>
    </div>
  );
}