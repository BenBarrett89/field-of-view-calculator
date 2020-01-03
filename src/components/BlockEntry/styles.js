import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

const colorMapping = {
  buttonColor: colors.accent,
  containerBackgroundColor: colors.primaryDark,
  invalidContainerBackgroundColor: colors.error,
  invalidTextInputBorderColor: colors.errorVariant,
  messageTextColor: colors.text,
  textInputBackground: colors.text,
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

const buttonContainer = {
  height: '30%',
}

const messageContainer = {
  alignItems: 'center',
  height: '30%',
}

export const buttonStyle = {
  color: colorMapping.buttonColor,
  errorColor: colorMapping.containerBackgroundColor,
}

const textInput = {
  backgroundColor: colorMapping.textInputBackground,
  fontSize: 24,
  height: 40,
  textAlign: 'center',
  width: '90%',
}

const invalidTextInput = Object.assign({}, textInput, {
  borderColor: colorMapping.textInputBackground,
  borderWidth: 3,
})

export const messageIcon = {
  color: colorMapping.messageTextColor,
  size: 20
}

const messageText = {
  color: colorMapping.messageTextColor,
  textAlign: 'center',
}

const styles = StyleSheet.create({
  buttonContainer,
  container,
  invalidContainer,
  invalidTextInput,
  messageContainer,
  messageText,
  textInput
})

export default styles