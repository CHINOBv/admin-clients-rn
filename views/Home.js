import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';
import {Headline, List} from 'react-native-paper';
import globalStyles from '../styles/global';

import {getClients} from '../utils/fetch';

const Home = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const getClientsAPI = async () => {
      try {
        const response = await getClients();
        setClients(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getClientsAPI();
  }, []);
  return (
    <View style={globalStyles.ctn}>
      <Headline style={globalStyles.title}>Clients</Headline>
      <FlatList
        data={clients}
        keyExtractor={(client) => client.id.toString()}
        renderItem={({item}) => (
          <List.Item title={item.name} description={item.company} />
        )}
      />
    </View>
  );
};

export default Home;
