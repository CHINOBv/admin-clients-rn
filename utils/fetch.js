import axios from 'axios';

const URL = 'http://192.168.0.2:3000/clients';

export const CreateNewClient = async (data) => {
  console.log(data);
  const res = await axios.post(`${URL}`, data);
  console.log(res);
};
