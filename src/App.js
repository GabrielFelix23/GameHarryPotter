import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Index from './componentes/Index'
import PedraFilosofal from './componentes/PedraFilosofal'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={Index}
            options={{headerShown:false}}
        />
         <Stack.Screen
            name="Pedra Filosofal"
            component={PedraFilosofal}
            options={{headerShown:false}}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}