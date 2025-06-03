import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function SecaoContato() {
  return (
    <section id="contato" className="secao-contato">
      <div className="container">
        <h2 className="titulo-secao">CONTATO</h2>
        <div className="divisor-titulo"></div>
        <div className="contato-conteudo">
          <div className="contato-info-wrapper">
            <h3>Vamos conversar!</h3>
            <p>Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo através dos canais abaixo.</p>
            <div className="contato-lista-icones">
              <div className="contato-item">
                <Mail size={20} />
                <span>joaosou78@gmail.com</span>
              </div>
              <div className="contato-item">
                <Phone size={20} />
                <span>(74) 98866-1772</span>
              </div>
              <div className="contato-item">
                <MapPin size={20} />
                <span>Sr. do Bonfim, BA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}