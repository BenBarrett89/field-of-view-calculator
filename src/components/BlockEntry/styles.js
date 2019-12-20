import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

const colorMapping = {
  containerBackgroundColor: colors.analogous,
  invalidContainerBackgroundColor: colors.errorVariant,
  invalidTextInputBorderColor: colors.error,
  textInputBackground: colors.white,
  // TODO Button
}

const container = {
  // Flex Item properties
  flexGrow: 1,
  height: '30%',
  width: '50%',
  // Flex Container properties
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-around',
  // Color properties
  backgroundColor: colorMapping.containerBackgroundColor,
}

const invalidContainer = Object.assign({}, container, {
  backgroundColor: colorMapping.invalidContainerBackgroundColor,
})

const button = {
  // TODO
}

const textInput = {
  height: 40,
  width: '60%',
  backgroundColor: colorMapping.textInputBackground,
  fontSize: 24
}

const invalidTextInput = Object.assign({}, textInput, {
  borderColor: colorMapping.textInputBackground,
  borderWidth: 3
})

const styles = StyleSheet.create({
  container,
  invalidContainer,
  invalidTextInput,
  textInput,
  button
})

export default styles