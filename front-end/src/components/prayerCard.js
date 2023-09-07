import PropTypes from 'prop-types';
import ButtonsPanel from './buttonsPanel';

function PrayerCard({ props }) {
  const newRegister = props.register;
  return (
    <div
      className="flex-1  px-4 py-3 lg:p-10 w-11/12 lg:w-5/12
    rounded-lg mx-auto shadow-lg bg-gray-300 "
    >
      {newRegister ? (
        <h1
          className="text-center text-2xl font-bold mb-4"
        >
          Seu Pedido de Oração

        </h1>)
        : <h1 className="text-center text-2xl font-bold mb-4">Pedido de Oração</h1>}
      <p className="text-center bg-white rounded-lg">{props.whom || props.prayerWhom}</p>
      <p className="text-center text-xl font-bold my-4">Motivo do Pedido de Oração</p>
      <p
        className="text-center bg-white rounded-lg mb-3"
      >
        {props.reason || props.prayerReason}

      </p>
      {!newRegister ? <ButtonsPanel /> : props.confirmButton}
      {newRegister && (
        <button
          type="button"
          className="bg-green-900 px-4 py-2 rounded-lg
            text-gray-300 font-bold w-full mt-3 h-10
            border-emerald-950 transition-transform transform
            hover:text-gray-300 hover:scale-110 hover:bg-green-900"
          onClick={ () => {
            props.changePreview();
          } }
        >
          Editar Pedido de Oração
        </button>
      )}
    </div>
  );
}

PrayerCard.propTypes = {
  whom: PropTypes.string,
  reason: PropTypes.string,
  register: PropTypes.bool,
  confirmButton: PropTypes.object,
  changePreview: PropTypes.func,
}.isRequired;

export default PrayerCard;
