import React, { useState, useEffect, useRef } from 'react';
import blurImage from './blur.png'; // Importando a imagem

const CardHover = () => {
  const cards = [
    {
      title: 'Ruído Branco',
      description:
        'Contém todas as frequências audíveis em igual intensidade. É utilizado para mascarar sons indesejados, ajudar na concentração e melhorar o sono, criando um ambiente neutro.',
    },
    {
      title: 'Ruído Rosa',
      description:
        'Possui uma distribuição de frequências mais equilibrada, proporcionando um som relaxante, ideal para meditação e concentração.',
    },
    {
      title: 'Ruído Marrom',
      description:
        'Um ruído mais profundo e suave, semelhante ao som de um trovão distante. Ideal para relaxar e dormir melhor.',
    },
  ];

  const [visibleCardCount, setVisibleCardCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Estado para verificar se a seção está visível
  const sectionRef = useRef(null); // Referência para a seção

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Verifica se a seção está visível
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // 10% da seção deve estar visível
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observa a seção
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Para de observar quando o componente é desmontado
      }
    };
  }, []);

  const handleScroll = (event) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? 'down' : 'up';

    if (isVisible) { // Apenas se a seção estiver visível
      setVisibleCardCount((prevCount) => {
        if (direction === 'down' && prevCount < cards.length - 1) {
          return prevCount + 1;
        } else if (direction === 'up' && prevCount > 0) {
          return prevCount - 1;
        }
        return prevCount;
      });
    }
  };

  return (
    <section
      id="frequencies"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      onWheel={handleScroll}
      ref={sectionRef} // Adiciona a referência à seção
    >
      {/* Div para imagem de fundo com blur usando a imagem importada */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md z-0"
        style={{ backgroundImage: `url(${blurImage})` }}
      ></div>

      {/* Texto de fundo */}
      <h2 className="absolute inset-0 text-7xl md:text-[200px] lg:text-[220px] font-shoulders text-white z-0 break-words flex items-center justify-center">
        Ruídos Calmantes
      </h2>

      {/* Cartões */}
      {cards.map((card, index) => (
        <div
          key={card.title}
          className={`absolute bg-white shadow-lg rounded-lg overflow-hidden md:w-2/3 flex flex-row transition-transform duration-500 ease-in-out`}
          style={{
            left: '50%',
            top: '50%', // Centraliza verticalmente
            transform: `translate(-50%, ${index - visibleCardCount} * 100%)`, // Move os cards para cima
            opacity: index <= visibleCardCount ? 1 : 0, // Tornar invisível os cards que não estão na fila
            zIndex: index <= visibleCardCount ? 10 : 0,
          }}
        >
          <div className="bg-vertical-gradient w-1/2 p-6"></div>
          <div className="bg-zinc-800 w-1/2 p-6 text-white text-wrap text-left">
            <h1 className="text-5xl mb-2 text-center font-gothic">{card.title}</h1>
            <p className="font-montserrat text-lg mt-10">{card.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardHover;
