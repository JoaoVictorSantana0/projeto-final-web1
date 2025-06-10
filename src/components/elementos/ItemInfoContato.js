// src/components/elementos/ItemInfoContato.js
import React from 'react';

// Este componente recebe o ícone como 'children' (filho) e o texto como uma prop.
export default function ItemInfoContato({ texto, children }) {
  // Verifica se o texto é um email para torná-lo um link clicável
  const isEmail = texto.includes('@');

  return (
    <div className="contato-item">
      {children} {/* Renderiza o ícone que foi passado */}
      <span>
        {isEmail ? <a href={`mailto:${texto}`}>{texto}</a> : texto}
      </span>
    </div>
  );
}