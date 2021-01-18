import axios from 'axios';
import {Platform} from 'react-native';

const URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3000/clients'
    : 'http://localhost:3000/clients';

export const createNewClient = (data) => {
  axios.post(`${URL}`, data).catch((e) => console.log(e));
};

export const getClients = async () => await axios(URL);
