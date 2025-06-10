// src/components/secoes/SecaoContato.js (versão refatorada)
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

// Importando os novos componentes
import TituloSecao from '../elementos/TituloSecao';
import ItemInfoContato from '../elementos/ItemInfoContato';


// Lista de dados para as informações de contato
const informacoesContato = [
  {
    texto: "joaosou78@gmail.com",
    Icone: <Mail size={20} />
  },
  {
    texto: "(74) 98866-1772",
    Icone: <Phone size={20} />
  },
  {
    texto: "Senhor do Bonfim, BA",
    Icone: <MapPin size={20} />
  }
];

export default function SecaoContato() {
  return (
    <section id="contato" className="secao-contato">
      <div className="container">
        {/* Peça 1: O Título da Seção (Reutilizado) */}
        <TituloSecao titulo="CONTATO" />

        <div className="contato-conteudo">
          {/* Coluna da Esquerda */}
          <div className="contato-info-wrapper">
            <h3>Vamos conversar!</h3>
            <p>Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo através dos canais abaixo.</p>

            {/* Peça 2: A Lista de Contatos (Gerada dinamicamente) */}
            <div className="contato-lista-icones">
              {informacoesContato.map((info) => (
                <ItemInfoContato key={info.texto} texto={info.texto}>
                  {info.Icone}
                </ItemInfoContato>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

