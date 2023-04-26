import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './Assets/Navigation'
import {requestUserPermission, notificationListener} from './Assets/Functions/NotificationService'

const App = () => {
  useEffect(()=>{
    requestUserPermission()
    notificationListener()
  })
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}

export default App