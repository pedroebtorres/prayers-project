import { useState, useContext, useEffect } from 'react';
import LoginContext from '../context/LoginContext';
import sarca from '../images/sarca-presbiteriana-nobg.png';
import PrayerCard from '../components/prayerCard';

function OrderPrayer() {
  const { addPrayer, handleClick } = useContext(LoginContext);
  const [whom, setWhom] = useState('');
  const [reason, setReason] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [preview, setPreview] = useState(false);
  const [prayerObject, setPrayerObject] = useState({});

  const confirmButton = (
    <button
      className="bg-green-900 px-4 py-2 rounded-lg
    text-gray-300 font-bold w-full mt-3 h-10
    border-emerald-950 transition-transform transform
    hover:text-gray-300 hover:scale-110 hover:bg-green-900"
      onClick={ () => {
        addPrayer({ whom, reason });
        handleClick('/choose');
      } }
    >
      Confirmar Pedido de Oração
    </button>);

  const changePreview = () => setPreview((prevPreview) => !prevPreview);

  useEffect(() => {
    if (whom !== '' && reason !== '') {
      setIsDisabled(false);
    }
  }, [whom, reason]);

  return (
    <div className="bg-green-900 h-screen text-gray-900 flex-1">
      <img src={ sarca } alt="Sarça Presbiteriana" className="max-w-md mx-auto h-2/6" />

      {!preview ? (
        <div
          className="flex-1 p-7 w-11/12 lg:w-5/12
        m-4 rounded-lg bg-gray-300 mx-auto shadow-lg"
        >
          <h1 className="text-center text-3xl font-bold mb-3">Pedido de Oração</h1>
          <form>
            <label htmlFor="whom" className="text-2xl text-gray-800">
              Por Quem?
            </label>
            <input
              type="text"
              name="whom"
              value={ whom }
              className="block border rounded-lg w-full py-1 px-2 my-1"
              onChange={ ({ target: { value } }) => setWhom(value) }
            />

            <label htmlFor="reason" className="text-2xl text-gray-800">
              Por Qual Motivo?
            </label>
            <textarea
              value={ reason }
              name="reason"
              rows="5"
              className="block border rounded-lg w-full py-1 px-2 my-1"
              onChange={ ({ target: { value } }) => setReason(value) }
            />
            {!isDisabled
            && (
              <button
                type="button"
                className="bg-green-900 px-4 py-2 rounded-lg
              text-gray-300 font-bold w-full mt-3 h-10
              border-emerald-950 transition-transform transform
              hover:text-gray-300 hover:scale-110 hover:bg-green-900"
                disabled={ isDisabled }
                onClick={ () => {
                  setPrayerObject({
                    whom,
                    reason,
                    register: true,
                    confirmButton,
                    changePreview });
                  changePreview();
                } }
              >
                Registrar Pedido de Oração
              </button>)}
            <button
              type="button"
              className="bg-green-900 px-4 py-2 rounded-lg
              text-gray-300 font-bold w-full mt-3 h-10
              border-emerald-950 transition-transform transform
              hover:text-gray-800 hover:scale-110 hover:bg-yellow-300"
              onClick={ () => handleClick('/choose') }
            >
              Voltar

            </button>
          </form>
        </div>
      ) : (
        <div>
          <PrayerCard props={ prayerObject } />
        </div>
      )}
    </div>
  );
}

export default OrderPrayer;
