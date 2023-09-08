import { useContext, useEffect } from 'react';
import LoginContext from '../context/LoginContext';
import sarca from '../images/sarca-presbiteriana-nobg.png';

function Choose() {
  const login = useContext(LoginContext);
  const { handleClick, church, prayers, getPrayers } = login;
  const isDisabled = !prayers.length > 0;

  useEffect(() => {
    getPrayers();
  });

  function isFirstCharacterNumber(str) {
    return !Number.isNaN(parseInt(str.charAt(0), 10));
  }

  function transformOptionValue(optionValue) {
    const LAST_NUMBER = -1;
    const parts = optionValue.split('-');

    if (isFirstCharacterNumber(optionValue)) {
      return `${parts[0].slice(0, LAST_NUMBER)}ª Igreja Presbiteriana de 
      ${parts[1].charAt(0).toUpperCase() + parts[1].slice(1)}`;
    }

    return `Igreja Presbiteriana 
    ${parts[1].charAt(0).toUpperCase() + parts[1].slice(1)}`;
  }

  return (
    <div
      className="
        bg-green-900
        h-screen
        text-gray-800
        flex-1
        "
    >
      <img
        src={ sarca }
        alt="Sarça Presbiteiriana"
        className="max-w-md mx-auto pt-12 h-2/5 lg:h-2/4"
      />
      <div
        className="flex-1 p-8 w-11/12 lg:w-5/12
      rounded-lg bg-gray-300 mx-auto shadow-lg"
      >
        <h1
          className="text-center text-xl lg:text-2xl mb-7"
        >
          {transformOptionValue(church)}

        </h1>
        <h1 className="text-center text-3xl font-bold">O que você vai fazer?</h1>
        <div className="mt-10 text-center flex place-content-center">
          <button
            className="rounded-lg border border-emerald-950 w-40 h-20
            transition-transform transform hover:text-gray-300
            hover:scale-125 hover:bg-green-900"
            disabled={ isDisabled }
            onClick={ () => {
              getPrayers();
              handleClick('/prayer');
            } }
          >
            Orar por alguém
          </button>
          <button
            className="rounded-lg border border-emerald-950 w-40 ml-6 h-20
              transition-transform transform hover:text-gray-300
              hover:scale-125 hover:bg-green-900"
            onClick={ () => handleClick('/order-prayer') }
          >
            Fazer um pedido de oração
          </button>
        </div>
        <button
          type="button"
          className="bg-green-900 px-4 py-2 rounded-lg
              text-gray-300 font-bold w-full mt-3 h-10
              border-emerald-950 transition-transform transform
              hover:text-gray-800 hover:scale-110 hover:bg-yellow-300"
          onClick={ () => handleClick('/') }
        >
          Voltar

        </button>
      </div>
    </div>
  );
}

export default Choose;
