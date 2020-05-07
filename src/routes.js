import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Time from './pages/Timer';
import Welcome from './pages/Welcome';

const AppStack = createStackNavigator();

export default function Routes() {
   return(
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
         <AppStack.Screen name="Welcome" component={Welcome} />
         <AppStack.Screen name="Time" component={Time} />
      </AppStack.Navigator>
   )
}
