import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { Drawernavigation } from './src/Navigator/DrawerNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <Drawernavigation />
    </NavigationContainer>
  )
}

export default App