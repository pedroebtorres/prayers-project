/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';
import prayersApi from '../utils/fetch';

function LoginProvider({ children }) {
  const [prayers, setPrayers] = useState([]);
  const [church, setChurch] = useState('1a-cacoal');
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const getPrayers = useCallback(async () => {
    prayersApi('GET', 'prayers')
      .then(({ data: prayersList }) => setPrayers(prayersList));
  }, []);

  const addPrayer = async ({ whom, reason }) => {
    prayersApi('POST', 'prayers', { reason, whom })
      .then(getPrayers);
  };

  const prayerChange = useCallback((newPrayer) => {
    setPrayers([...prayers, newPrayer]);
  }, [prayers]);

  const verify = useCallback((churchValue) => {
    const churchVerify = churchValue === null;
    setIsDisabled(churchVerify);
  }, []);

  const churchChange = useCallback(({ target: { value } }) => {
    verify(value);
    setChurch(value);
  }, [verify]);

  const handleClick = useCallback((way) => {
    navigate(way);
  }, [navigate]);

  const contextValue = useMemo(() => (
    { church, churchChange, isDisabled, handleClick, prayers, prayerChange, addPrayer }
  ), [church, churchChange, isDisabled, handleClick, prayers, prayerChange, addPrayer]);

  return (
    <LoginContext.Provider
      value={ contextValue }
    >
      {children}
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;
