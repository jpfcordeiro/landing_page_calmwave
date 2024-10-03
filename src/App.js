import WaveBackground from "./components/WaveBackground";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-2 bg-[#010101]">
        <div className="flex justify-center items-center">
          <img
            src="icons/logo_sem_nome.png"
            alt="Logo"
            className="w-14 h-auto"
          />
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#calmwave" className="hover:text-gray-300">
              Calm Wave
            </a>
          </li>
          <li>
            <a href="#why" className="hover:text-gray-300">
              Por Que?
            </a>
          </li>
          <li>
            <a href="#frequencies" className="hover:text-gray-300">
              Frequências
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contato
            </a>
          </li>
        </ul>
        <button className="bg-transparent border border-white rounded-xl px-4 py-2 hover:bg-white hover:text-black">
          Entrar
        </button>
      </nav>

      {/* Principal */}
      <div className="flex flex-col" id="main">
        {/* Hero  */}
        <div
          className="relative flex flex-row items-center py-20 bg-[#464646] bg-cover"
          style={{
            backgroundImage: `url('/fundo.png') no-repeat center center fixed`,
            backgroundSize: "cover",
            height: "60vh",
          }}
        >
          <div className="absolute inset-0 overflow-hidden pr-4">
            <h1 className="text-[35rem] font-bold text-white opacity-5 whitespace-nowrap absolute -top-40 -left-40">
              CALM WAVE
            </h1>
          </div>

          <div className="absolute inset-0 bg-[#2C2C2C] bg-opacity-70"></div>

          {/* Texto à esquerda */}
          <div className="relative z-10 w-1/2 pl-10 text-left">
            <h1 className="text-5xl font-shoulders text-white">
              Easier life with <p>Calm Waves</p>
            </h1>
            <p className="mt-4 text-md text-white">
              O fone de ouvido com inteligência artificial
              <p> voltado para as crianças dentro do Transtorno</p>{" "}
              <p>do Espectro Autista (TEA) no ambiente pedagógico</p>
            </p>
            <a
              href="#calmwave"
              className="mt-6 inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition"
            >
              Sobre nós
            </a>
          </div>

          {/* Imagem do fone à direita */}
          <div className="relative z-10 w-1/2 flex justify-center items-center">
            <img
              src="/path/to/headphone.png"
              alt="Fone de ouvido"
              className="w-[80%] h-auto"
            />
          </div>
        </div>

        {/* Info */}
        <section id="calmwave" className="py-14 bg-[#ffffff44]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">Calm Wave</h2>
            <p className="mt-4 text-white">
              Promovendo a inclusão de forma relaxante através da tecnologia.
            </p>
            <p className="mt-2 text-white">
              Este projeto está sendo desenvolvido pela startup VVAI© criada por
              estudantes da Fatec Registro.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#010101] py-6">
          <div className="w-full flex justify-center  overflow-hidden">
            <div className="logos-container gap-10 flex items-center animate-scroll">
              <img src="/icons/techs/react.svg" alt="React" className="h-8" />
              <img
                src="/icons/techs/express.svg"
                alt="Express"
                className="h-8"
              />
              <img src="/icons/techs/node.svg" alt="Node JS" className="h-8" />
              <img src="/icons/techs/js.svg" alt="JavaScript" className="h-8" />
              <img src="/icons/techs/flask.svg" alt="Flask" className="h-8" />
              <img
                src="/icons/techs/machine.svg"
                alt="Machine Learning"
                className="h-8"
              />
              <img
                src="/icons/techs/tensor.svg"
                alt="TensorFlow"
                className="h-8"
              />
              <img src="/icons/techs/python.svg" alt="Python" className="h-8" />
              <img
                src="/icons/techs/arduino.svg"
                alt="Arduíno"
                className="h-8"
              />
              <img
                src="/icons/techs/rasp.svg"
                alt="Raspberry Pi"
                className="h-8"
              />
              <img src="/icons/techs/kotlin.svg" alt="Kotlin" className="h-8" />
              <img src="/icons/techs/spring.svg" alt="Spring" className="h-8" />
              <img src="/icons/techs/java.svg" alt="Java" className="w-10" />
              <img src="/icons/techs/mongo.svg" alt="MongoDB" className="h-8" />
              <img src="/icons/techs/react.svg" alt="React" className="h-8" />
              <img
                src="/icons/techs/express.svg"
                alt="Express"
                className="h-8"
              />
              <img src="/icons/techs/node.svg" alt="Node JS" className="h-8" />
              <img src="/icons/techs/js.svg" alt="JavaScript" className="h-8" />
              <img src="/icons/techs/flask.svg" alt="Flask" className="h-8" />
              <img
                src="/icons/techs/machine.svg"
                alt="Machine Learning"
                className="h-8"
              />
              <img
                src="/icons/techs/tensor.svg"
                alt="TensorFlow"
                className="h-8"
              />
              <img src="/icons/techs/python.svg" alt="Python" className="h-8" />
              <img
                src="/icons/techs/arduino.svg"
                alt="Arduíno"
                className="h-8"
              />
              <img
                src="/icons/techs/rasp.svg"
                alt="Raspberry Pi"
                className="h-8"
              />
              <img src="/icons/techs/kotlin.svg" alt="Kotlin" className="h-8" />
              <img src="/icons/techs/spring.svg" alt="Spring" className="h-8" />
              <img src="/icons/techs/java.svg" alt="Java" className="w-10" />
              <img src="/icons/techs/mongo.svg" alt="MongoDB" className="h-8" />
            </div>
          </div>
        </footer>
      </div>

      {/* Por Que? */}
      <section
        id="why"
        className="relative h-screen bg-gray-800 flex justify-center text-white"
      >
        <WaveBackground />
        <div className="relative max-w-6xl mx-auto flex items-start mt-20 justify-between z-10">
          {/* Coluna da Esquerda */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-teal-300 mb-4">
              Por que Calm Wave?
            </h2>
            <span className="text-xl leading-relaxed">
              O Transtorno do Espectro Autista (TEA) é uma condição que
              influencia a forma como uma pessoa se comunica, interage
              socialmente e se comporta.
              <br />
              É caracterizado por diferenças no desenvolvimento cerebral que
              afetam a maneira como as conexões neurais são formadas e
              processadas.
              <br />A hipersensibilidade auditiva em crianças com TEA é
              caracterizada por uma sensibilidade aumentada aos sons, podendo
              causar desconforto ou ansiedade.
            </span>
          </div>

          {/* Coluna da Direita */}
          <div className="w-full md:w-1/2 text-3xl font-bold space-y-6 flex flex-col items-center">
            <div className="w-3/4 pt-4 text-right">
              <span className="text-teal-300">2 a cada 1000</span>{" "}
              <span>crianças diagnosticam o autismo</span>
            </div>
            <div className="border-t border-gray-400 w-3/4 pt-4 text-right">
              <span className="text-teal-300">Mais de 90%</span>{" "}
              <span>possuem hipersensibilidade auditiva</span>
            </div>
            <div className="border-t border-b border-gray-400 w-3/4 pt-4 text-right pb-4">
              <span className="text-black px-4 py-3 rounded-md">
                Principal barreira no aprendizado
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="solutions"
        className="relative h-screen bg-gray-800 flex items-center justify-center text-center"
      >
        <div className="relative max-w-4xl mx-auto z-10">
          <h2 className="text-3xl font-bold">Soluções</h2>
          <p className="mt-4 text-lg">RECURSOS PODEROSOS</p>
          <p className="mt-4 text-lg">SÓ PARA VOCÊ</p>

          {/* Descrição geral */}
          <p className="mt-6 text-md">
            No final, se espera que nossa tecnologia melhore a qualidade de vida
            e o bem-estar emocional das crianças com TEA, além de contribuir
            para a promoção da educação inclusiva, facilitando a participação e
            o sucesso acadêmico de todas as crianças, independentemente de suas
            necessidades sensoriais ou cognitivas.
          </p>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <img
                src="/path/to/image1.jpg"
                alt="Descrição do Card 1"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">Título do Card 1</h3>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <img
                src="/path/to/image2.jpg"
                alt="Descrição do Card 2"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">Título do Card 2</h3>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <img
                src="/path/to/image3.jpg"
                alt="Descrição do Card 3"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">Título do Card 3</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Frequências */}
      <section
        id="frequencies"
        className="relative h-screen bg-gray-800 flex items-center justify-center text-center"
      >
        <div className="relative max-w-4xl mx-auto z-10">
          <h2 className="text-3xl font-bold">Frequências</h2>
          <p className="mt-4 text-lg">Frequências</p>
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="bg-[#010101] py-3">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex justify-between w-full mb-4">
            <div className="text-left">
              <h2 className="text-3xl font-bold">Contato</h2>
              <p className="mt-4 text-lg">Informações de contato.</p>
              <p>calmwave2024@outlook.com</p>
              <p>(13) 78945-5658</p>
            </div>
            <div className="text-center mx-auto mt-5">
              <span className="text-xl font-bold text-white bg-yellow-500 px-4 py-2 rounded">
                vvAi Startup
              </span>
            </div>
            <div className="text-right">
              <span className="text-lg">Redes Sociais</span>
              <div className="flex justify-center mt-4 space-x-4">
                <a href="#" aria-label="Gmail">
                  <img
                    src="icons/social/gmail.svg"
                    alt="Gmail"
                    className="h-6 w-6"
                  />
                </a>
                <a href="#" aria-label="Instagram">
                  <img
                    src="icons/social/instagram.svg"
                    alt="Instagram"
                    className="h-6 w-6"
                  />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <img
                    src="icons/social/linkedin.svg"
                    alt="LinkedIn"
                    className="h-6 w-6"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Direitos reservados */}
          <div className="mt-1 text-center">
            <span className="text-sm text-gray-400">
              vvAi Todos os direitos reservados © 2024
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
