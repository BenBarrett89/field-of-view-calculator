import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import CalculatorScreen from '../screens/CalculatorScreen'

import colors from '../config/colors'

const AppNavigator = createStackNavigator(
  {
    Calculator: CalculatorScreen
  },
  {
    initialRouteName: 'Calculator',
    defaultNavigationOptions: {
      headerStyle: {
        fontColor: colors.primary,
        backgroundColor: colors.complimentary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
)

export default createAppContainer(AppNavigator);