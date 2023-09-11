import { useContext } from 'react';
import sarca from '../images/sarca-presbiteriana-nobg.png';
import checkmark from '../images/nobg-checkmark.png';
import LoginContext from '../context/LoginContext';

function OrderDone() {
  const { handleClick } = useContext(LoginContext);
  return (
    <div
      className="
        bg-green-900
        h-screen
        text-gray-800
        flex-1
        p-3

        "
    >
      <img
        src={ sarca }
        alt="Sarça Presbiteiriana"
        className="max-w-md mx-auto pt-12 h-2/5 lg:h-2/4"
      />
      <div
        className="p-7 w-11/12 lg:w-5/12
        m-4 rounded-lg bg-gray-300 mx-auto shadow-lg"
      >
        <div className="justify-center place-content-center">

          <h1
            className="text-center text-3xl font-bold text-gray-800"
          >
            Pedido Feito
          </h1>
          <img
            src={ checkmark }
            alt="Checkmark or Donemark"
            className="mx-auto my-1 w-9 h-8"
          />
        </div>
        <button
          type="button"
          className="bg-green-900 px-4 py-2 rounded-lg
              text-gray-300 font-bold w-full mt-3 h-10
              border-emerald-950 transition-transform transform
              hover:text-gray-300 hover:scale-110 hover:bg-green-900"
          onClick={ () => handleClick('/choose') }
        >
          Ir ao Menu

        </button>
      </div>
    </div>
  );
}

export default OrderDone;
