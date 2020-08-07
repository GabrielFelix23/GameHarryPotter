import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Index from './componentes/Index'
import PedraFilosofal from './componentes/PedraFilosofal'
import CamaraSecreta from './componentes/CamaraSecreta'
import PrisioneirodeAzkaban from './componentes/PrisioneirodeAzkaban'
import CaliceDeFogo from './componentes/CaliceDeFogo'
import OrdemDaFenix from './componentes/ordemDaFenix'
import EnigmaDoPrincipe from './componentes/enigmaDoPrincipe'

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
        <Stack.Screen
            name="Câmara Secreta"
            component={CamaraSecreta}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name="Prisioneiro de Azkaban"
            component={PrisioneirodeAzkaban}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name="Calice de Fogo"
            component={CaliceDeFogo}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name="Ordem da Fenix"
            component={OrdemDaFenix}
            options={{headerShown:false}}
        />

        <Stack.Screen
            name="Enigma do Principe"
            component={EnigmaDoPrincipe}
            options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}