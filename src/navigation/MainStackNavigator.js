import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Accueil from '../screens/Accueil'
import ChampionsListPage from '../screens/ChampionsListPage'
import Login from '../screens/Login'
import Register from '../screens/Register'
import RegisterSuccess from '../screens/RegisterSuccess'
import Profile from '../screens/Profile'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Accueil"
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name='Accueil' component={Accueil} />
        <Stack.Screen name='ChampionsListPage' component={ChampionsListPage} />
        <Stack.Screen name='Login' component={Login}  />
        <Stack.Screen name='Register' component={Register}  />
        <Stack.Screen name='RegisterSuccess' component={RegisterSuccess} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator