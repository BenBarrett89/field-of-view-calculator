import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Provider } from 'react-redux'

import colors from './config/colors.js'
import AppNavigator from './navigation/AppNavigator'
import store from './redux/store'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.triadic,
  },
})

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    )
  } else {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </View>
    )
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      ...Ionicons.font,
    })
  ])
}

function handleLoadingError(error) {
  console.warn(error)
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true)
}
