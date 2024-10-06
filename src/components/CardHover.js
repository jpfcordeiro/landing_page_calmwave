import React, { useState } from 'react';

const CardHover = () => {
  // Array de objetos com títulos e descrições dos cards
  const cards = [
    {
      title: 'Ruído Branco',
      description:
        'Contém todas as frequências audíveis em igual intensidade. É utilizado para mascarar sons indesejados, ajudar na concentração e melhorar o sono, criando um ambiente neutro.',
    },
    {
      title: 'Ruído Marrom',
      description:
        'Um ruído mais profundo e suave, semelhante ao som de um trovão distante. Ideal para relaxar e dormir melhor.',
    },
    {
      title: 'Ruído Rosa',
      description:
        'Possui uma distribuição de frequências mais equilibrada, proporcionando um som relaxante, ideal para meditação e concentração.',
    },
  ];

  // Estado para controlar a posição de cada card
  const [isOutOfScreen, setIsOutOfScreen] = useState([false, false, false]);

  const handleMouseEnter = (index) => {
    // Alterna o estado do card apenas ao passar o mouse
    setIsOutOfScreen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Alterna o estado do card atual
      return newState;
    });
  };

  return (
    <section
      id="frequencies"
      className="relative h-screen bg-gray-800 flex items-center justify-center text-center overflow-hidden"
    >
      {/* Texto de fundo */}
      <h2 className="absolute inset-0 text-7xl md:text-[200px] lg:text-[280px] font-shoulders text-white z-1 break-words flex items-center justify-center">
        Ruídos Calmantes
      </h2>

      {/* Cartões */}
      {cards.map((card, index) => (
        <div
          key={card.title}
          className={`absolute z-${10 + index} bg-white shadow-lg rounded-lg overflow-hidden md:w-2/3 flex flex-row transform transition-transform duration-500 ease-in-out 
          ${isOutOfScreen[index] ? '-translate-x-full' : 'translate-x-0'}`}
          onMouseEnter={() => handleMouseEnter(index)} // Alterna o estado ao passar o mouse
        >
          <div className="bg-yellow-100 w-1/2 p-6"></div>
          <div className="bg-zinc-800 w-1/2 p-6 text-white text-wrap text-left">
            <h1 className="text-5xl mb-2 text-center font-gothic">{card.title}</h1>
            <p className="font-montserrat text-lg mt-10">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardHover;
