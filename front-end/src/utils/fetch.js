import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST;
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL;

const fetch = axios.create({
  baseURL: `${PROTOCOL}://${HOST}`,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const prayersApi = async (method, endpoint, body) => fetch
  .request({ method, url: endpoint, data: body })
  .then(({ status, data }) => ({ status, data }));

export default prayersApi;
