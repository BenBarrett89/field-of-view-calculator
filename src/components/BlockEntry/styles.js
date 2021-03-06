import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

const colorMapping = {
  buttonColor: colors.accent,
  buttonTextColor: colors.text,
  containerBackgroundColor: colors.primaryDark,
  invalidButtonColor: colors.text,
  invalidButtonTextColor: colors.error,
  invalidContainerBackgroundColor: colors.error,
  invalidTextInputColor: colors.errorVariant,
  messageTextColor: colors.text,
  textInputBackground: colors.text,
  textInputBorderColor: colors.primary,
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
  width: '90%',
}

const messageContainer = {
  alignItems: 'center',
  height: '30%',
}

const button = {
  alignItems: 'center',
  backgroundColor: colorMapping.buttonColor,
  padding: 10,
  paddingHorizontal: 40,
  width: '90%',
}

const invalidButton = Object.assign({}, button, {
  backgroundColor: colorMapping.invalidButtonColor,
})

const buttonText = {
  color: colorMapping.buttonTextColor,
}

const invalidButtonText = Object.assign({}, buttonText, {
  color: colorMapping.invalidButtonTextColor,
})

const textInput = {
  backgroundColor: colorMapping.textInputBackground,
  borderColor: colorMapping.textInputBorderColor,
  borderWidth: 3,
  fontSize: 24,
  height: 40,
  textAlign: 'center',
  width: '90%',
}

const invalidTextInput = Object.assign({}, textInput, {
  color: colorMapping.invalidTextInputColor,
  borderColor: colorMapping.invalidTextInputColor,
})

export const messageIcon = {
  accentColor: colorMapping.buttonColor,
  color: colorMapping.messageTextColor,
  size: 20,
}

const messageText = {
  color: colorMapping.messageTextColor,
  textAlign: 'center',
}

const styles = StyleSheet.create({
  button,
  buttonText,
  buttonContainer,
  container,
  invalidButton,
  invalidButtonText,
  invalidContainer,
  invalidTextInput,
  messageContainer,
  messageText,
  textInput
})

export default styles