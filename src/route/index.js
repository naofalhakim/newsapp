import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { ContactForm, NewsList, Login} from '../pages';
import NewsDetail from '../pages/NewsDetail';


const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function Route() {
  return (
    <Stack.Navigator
      initialRouteName={Login}
      screenOptions={{
        transitionSpec: {
          open: config,
          close: config,
        },
      }}>
      <Stack.Screen
        name="News List"
        component={NewsList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="News Detail"
        component={NewsDetail}
        options={{headerShown: false}}
      />

    <Stack.Screen
        name="Contact Form"
        component={ContactForm}
        options={{headerShown: false}}
      />

    <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
}

export default Route;
