// src/components/elementos/CartaoConteudo.js
import React from 'react';

// Componente que recebe 'titulo' e 'descricao' como props
export default function CartaoConteudo({ titulo, descricao }) {
  return (
    // Usamos um Fragmento (<>) para agrupar os elementos
    <>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </>
  );
}