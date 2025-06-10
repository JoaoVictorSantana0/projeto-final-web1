// src/components/elementos/BlocoApresentacao.js
import React from 'react';

// Componente que recebe 'titulo' e 'subtitulo' como props
export default function BlocoApresentacao({ titulo, subtitulo }) {
  return (
    // O Fragmento <> é usado para agrupar os elementos
    <>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        {titulo}
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-8">
        {subtitulo}
      </p>
    </>
  );
}