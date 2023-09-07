import { useContext, useState } from 'react';
import LoginContext from '../context/LoginContext';

function ButtonsPanel() {
  const { handleClick } = useContext(LoginContext);
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div>
      {isDisabled ? (
        <>
          <p className="text-center text-xl font-bold my-4">Já acabou de orar?</p>
          <button
            className="bg-green-900 px-4 py-2 rounded-lg
              text-gray-300 font-bold w-full mt-3 h-10
              border-emerald-950 transition-transform transform
              hover:text-gray-300 hover:scale-110 hover:bg-green-900"
            onClick={ () => {
              setIsDisabled(false);
            } }
          >
            Sim
          </button>
        </>
      ) : (
        <button
          className="bg-green-900 px-4 py-2 rounded-lg
            text-gray-300 font-bold w-full mt-3 h-10
            border-emerald-950 transition-transform transform
            hover:text-gray-300 hover:scale-110 hover:bg-green-900"
          onClick={ () => handleClick('/choose') }
        >
          Voltar
        </button>
      )}
    </div>
  );
}

export default ButtonsPanel;
