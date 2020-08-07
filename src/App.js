import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Index from './componentes/views/Index'
import PedraFilosofal from './componentes/views/PedraFilosofal'
import CamaraSecreta from './componentes/views/CamaraSecreta'
import PrisioneirodeAzkaban from './componentes/views/PrisioneirodeAzkaban'
import CaliceDeFogo from './componentes/views/CaliceDeFogo'
import OrdemDaFenix from './componentes/views/ordemDaFenix'
import EnigmaDoPrincipe from './componentes/views/enigmaDoPrincipe'
import ReliquiasDaMorte from './componentes/views/reliquiasDaMorte'

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
        <Stack.Screen
            name="Reliquias da Morte"
            component={ReliquiasDaMorte}
            options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}