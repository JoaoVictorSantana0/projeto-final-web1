import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react'; // Certifique-se de ter instalado: npm install lucide-react

export default function Cabecalho() {
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
    <header className="cabecalho"> {/* As classes CSS virão do seu index.css */}
      <div className="container cabecalho-container">
        <div className="logo">
        <img src="/meu-logo.png" alt="Logo do Meu Portfólio" className="logo-imagem" />
</div>
        <nav className="navegacao-desktop">
          <ul>
            <li><a href="#inicio">INÍCIO</a></li>
            <li><a href="#projetos">PROJETOS</a></li>
            <li><a href="#contato">CONTATO</a></li>
          </ul>
        </nav>
        <button
          className="menu-mobile-botao"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          onClick={toggleMenu}
        >
          {menuAberto ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
        </button>
      </div>
      {menuAberto && (
        <nav className="navegacao-mobile ativo" ref={menuRef}>
          <ul>
            <li><a href="#inicio" onClick={() => setMenuAberto(false)}>INÍCIO</a></li>
            <li><a href="#projetos" onClick={() => setMenuAberto(false)}>PROJETOS</a></li>
            <li><a href="#contato" onClick={() => setMenuAberto(false)}>CONTATO</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}