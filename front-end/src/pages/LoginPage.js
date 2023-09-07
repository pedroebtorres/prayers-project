import { useContext } from 'react';
import LoginContext from '../context/LoginContext';
import sarca from '../images/sarca-presbiteriana-nobg.png';

function Login() {
  const login = useContext(LoginContext);
  const {
    churchChange,
    isDisabled,
    handleClick,
  } = login;
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
        className="max-w-md mx-auto pt-12 h-96"
      />
      <form
        className="flex-1  p-6 lg:p-10 w-11/12 lg:w-5/12
      rounded-lg bg-gray-300 mx-auto shadow-lg"
      >

        <h1 className="text-center text-3xl font-bold mb-2">Escolha Sua Igreja</h1>

        <select
          onClick={ churchChange }
          className="my-1 text-center p-1 w-full h-10 rounded-xl"
        >
          <option value="1a-cacoal">1ª Igreja Presbiteriana de Cacoal</option>
          <option value="3a-jipa">3ª Igreja Presbiteriana de Ji-Paraná</option>
          <option value="ip-jardins">Igreja Presbiteriana dos Jardins</option>
        </select>

        <button
          type="button"
          disabled={ isDisabled }
          onClick={ () => handleClick('/choose') }
          className="rounded-xl border w-full p-1 my-3 text-center h-10
              border-emerald-950 transition-transform transform
              hover:text-gray-300 hover:scale-110 hover:bg-green-900
              bg-green-900 font-bold text-gray-300"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
