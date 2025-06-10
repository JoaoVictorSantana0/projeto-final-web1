// src/components/elementos/IconeSocial.js
import React from 'react';

// Componente que recebe o link (href), uma descrição para acessibilidade (ariaLabel),
// e o próprio ícone como um "filho" (children).
export default function IconeSocial({ href, ariaLabel, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-gray-600 hover:text-blue-600 transition-colors p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
    >
      {children} {/* Renderiza o ícone que for passado aqui */}
    </a>
  );
}