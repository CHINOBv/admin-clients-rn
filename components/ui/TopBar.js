import React from 'react';

import {Button} from 'react-native-paper';

const TopBar = ({navigation}) => {
  const handleOnPress = () => {
    navigation.navigate('NewClient');
  };

  return (
    <>
      <Button onPress={() => handleOnPress()} color="#ffff" icon="plus-circle">
        New Client
      </Button>
    </>
  );
};

export default TopBar;
