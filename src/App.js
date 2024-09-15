function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-2 bg-[#010101]">
        <div className="flex justify-center items-center">
          <img src="/logo_sem_nome.png" alt="Logo" className="w-full max-w-sm sm:max-w-sm md:max-w-sm lg:max-w-lg xl:max-w-md h-auto" />
        </div>
        <ul className="flex space-x-6">
          <li><a href="#calmwave" className="hover:text-gray-300">Calm Wave</a></li>
          <li><a href="#why" className="hover:text-gray-300">Por Que?</a></li>
          <li><a href="#frequencies" className="hover:text-gray-300">Frequências</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contato</a></li>
        </ul>
        <button className="bg-transparent border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-black">
          Entrar
        </button>
      </nav>

      {/* Principal */}
      <div className="flex flex-col" id="main">
        {/* Hero  */}
        <div className="relative flex-shrink-0 text-center py-20 bg-[#464646] bg-cover" style={{ backgroundImage: `url('/fundo.png') no-repeat center center fixed`, backgroundSize: "cover", height: "60vh" }}>
          <div className="absolute inset-0 bg-[#2C2C2C] bg-opacity-70"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <h1 className="text-4xl font-bold">Easier life with Calm Waves</h1>
            <p className="mt-4 text-lg">
              O fone de ouvido com inteligência artificial voltado para as crianças dentro do Transtorno do Espectro Autista (TEA) no ambiente pedagógico
            </p>
            <a
              href="#calmwave"
              className="mt-6 inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition"
            >
              Sobre nós
            </a>
          </div>
        </div>

        {/* Info  */}
        <section id="calmwave" className="py-14 bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Calm Wave</h2>
            <p className="mt-4">Promovendo a inclusão de forma relaxante através da tecnologia.</p>
            <p className="mt-2">
              Este projeto está sendo desenvolvido pela startup WAI© criada por estudantes da Fatec Registro.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#010101] py-6">
          <div className="max-w-4xl mx-auto flex justify-center space-x-6">
            <img src="/icons/techs/react.svg" alt="React" className="h-8" />
            <img src="/icons/techs/express.svg" alt="Express" className="h-8" />
            <img src="/icons/techs/node.svg" alt="Node JS" className="h-8" />
            <img src="/icons/techs/js.svg" alt="JavaScript" className="h-8" />
            <img src="/icons/techs/flask.svg" alt="Flask" className="h-8" />
            <img src="/icons/techs/machine.svg" alt="Machine Learning" className="h-8" />
            <img src="/icons/techs/tensor.svg" alt="TensorFlow" className="h-8" />
            <img src="/icons/techs/python.svg" alt="Python" className="h-8" />
            <img src="/icons/techs/arduino.svg" alt="Arduíno" className="h-8" />
          </div>
        </footer>
      </div>

      {/* Por Que? */}
      <section id="why" className="h-screen bg-gray-700 flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">Por Que?</h2>
          <p className="mt-4 text-lg">
            Explicação.
          </p>
        </div>
      </section>

      {/* Frequências */}
      <section id="frequencies" className="h-screen bg-gray-800 flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">Frequências</h2>
          <p className="mt-4 text-lg">
          Frequências
          </p>
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="bg-[#010101] py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Contato</h2>
          <p className="mt-4 text-lg">
            Informações de contato.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
