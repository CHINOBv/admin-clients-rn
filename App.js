import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StatusBar, StyleSheet} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import TopBar from './components/ui/TopBar';

import Home from './views/Home';

import NewClient from './views/NewClient';
import DetailsClient from './views/DetailsClient';

const App = () => {
  const Stack = createStackNavigator();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#1774f2',
    },
  };
  //console.log(theme);
  return (
    <PaperProvider>
      <StatusBar backgroundColor={theme.colors.primary} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.surface,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={({navigation, route}) => ({
              headerLeft: (props) => (
                <TopBar {...props} navigation={navigation} route={route} />
              ),
            })}
          />
          <Stack.Screen name="NewClient" component={NewClient} />
          <Stack.Screen name="DetailsClient" component={DetailsClient} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
