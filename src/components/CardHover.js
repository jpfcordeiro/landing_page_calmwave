import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import blurImage from './blur.png';

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

  return (
    <section id="parallax-section" className="relative overflow-hidden min-h-screen">
      <Parallax pages={2} className="w-full h-full">
        {/* Camada da Imagem de Fundo e Texto */}
        <ParallaxLayer offset={0} speed={0.1} sticky={{ start: 0, end: 2.5 }}>
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-md z-0"
            style={{ backgroundImage: `url(${blurImage})` }}
          ></div>
          <h2 className="relative text-7xl md:text-[200px] lg:text-[220px] font-shoulders text-white text-center z-10 pt-20">
            Ruídos Calmantes
          </h2>
        </ParallaxLayer>

        {/* Camada dos Cartões */}
        <ParallaxLayer offset={1} speed={1}>
          <section
            id="frequencies"
            className="relative h-screen flex flex-col items-center justify-center text-center overflow-visible"
          >
            {/* Cartões empilhados */}
            <div className="z-10 flex flex-col items-center space-y-8">
              {cards.map((card, index) => (
                <div
                  key={card.title}
                  className="bg-white shadow-lg rounded-lg overflow-hidden md:w-2/3 flex flex-row mb-4 transition-transform duration-500 transform"
                  style={{
                    transform: `translateY(${index * 20}px)`,
                  }}
                >
                  <div className="bg-vertical-gradient w-1/2 p-6"></div>
                  <div className="bg-zinc-800 w-1/2 p-6 text-white text-wrap text-left">
                    <h1 className="text-5xl mb-2 text-center font-gothic">{card.title}</h1>
                    <p className="font-montserrat text-lg mt-10">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
};

export default CardHover;
