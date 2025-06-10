// src/components/layout/Cabecalho.js (versão refatorada)
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import ItemMenu from '../elementos/ItemMenu'; // 1. IMPORTAMOS O NOVO COMPONENTE

// 2. CRIAMOS UMA LISTA DE DADOS PARA OS LINKS DA NAVEGAÇÃO
//    Isso separa os dados da apresentação e facilita a adição de novos links.
const linksNavegacao = [
  { href: "#inicio", texto: "INÍCIO" },
  { href: "#projetos", texto: "PROJETOS" },
  { href: "#contato", texto: "CONTATO" },
];

export default function Cabecalho() {
  // A lógica do menu (useState, useEffect, etc.) continua a mesma
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (!event.target.closest('.menu-mobile-botao')) {
          setMenuAberto(false);
        }
      }
    }
    if (menuAberto) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuAberto]);

  return (
    <header className="cabecalho">
      <div className="container cabecalho-container">
        <div className="logo">
          <img src="/meu-logo.png" alt="Logo do Meu Portfólio" className="logo-imagem" />
        </div>

        {/* 3. NAVEGAÇÃO DESKTOP REFATORADA */}
        <nav className="navegacao-desktop">
          <ul>
            {/* Usamos .map() para criar um <ItemMenu /> para cada item na nossa lista de dados */}
            {linksNavegacao.map((link) => (
              <ItemMenu
                key={link.texto} // A 'key' é importante para o React em listas
                href={link.href}
                texto={link.texto}
              />
            ))}
          </ul>
        </nav>

        {/* O botão do menu mobile continua igual */}
        <button
          className="menu-mobile-botao"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          onClick={toggleMenu}
        >
          {menuAberto ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
        </button>
      </div>

      {/* 4. NAVEGAÇÃO MOBILE REFATORADA */}
      {menuAberto && (
        <nav className="navegacao-mobile ativo" ref={menuRef}>
          <ul>
            {/* Também usamos .map() aqui, passando a função para fechar o menu */}
            {linksNavegacao.map((link) => (
              <ItemMenu
                key={link.texto}
                href={link.href}
                texto={link.texto}
                onClick={() => setMenuAberto(false)} // Passamos a função para fechar o menu no clique
              />
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}