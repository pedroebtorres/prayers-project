import { useContext } from 'react';
import LoginContext from '../context/LoginContext';
import randomPrayer from '../utils/randomPrayer';
import PrayerCard from '../components/prayerCard';
import sarca from '../images/sarca-presbiteriana-nobg.png';

function Prayer() {
  const { prayers } = useContext(LoginContext);
  const choosedPrayer = { ...randomPrayer(prayers), register: false };
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
        className="max-w-md mx-auto pt-12 h-96"
      />
      <PrayerCard props={ choosedPrayer } />
    </div>

  );
}

export default Prayer;
