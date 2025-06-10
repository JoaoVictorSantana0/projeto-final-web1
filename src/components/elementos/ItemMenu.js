// src/components/elementos/ItemMenu.js
import React from 'react';

// Este componente recebe 3 props:
// - href: o link de destino (ex: "#inicio")
// - texto: o texto que será exibido (ex: "INÍCIO")
// - onClick: uma função opcional que será chamada quando o link for clicado
//   (útil para fechar o menu mobile)
export default function ItemMenu({ href, texto, onClick }) {
  return (
    <li>
      <a href={href} onClick={onClick}>
        {texto}
      </a>
    </li>
  );
}