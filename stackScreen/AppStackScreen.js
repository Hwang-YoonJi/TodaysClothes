import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherScreen from './screens/WeatherScreen';
import ClothesScreen from './screens/ClothesScreen';

const Stack = createStackNavigator();

const AppStackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Weather"
          component={WeatherScreen}
          options={{ title: '날씨' }}
        />
        <Stack.Screen name="Clothes" component={ClothesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStackScreen;