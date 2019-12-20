import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

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
  backgroundColor: colors.analogous,
}

const button = {}

const textInput = {
  height: 40,
  width: '60%',
  backgroundColor: colors.white,
  fontSize: 24
}

const invalidTextInput = Object.assign({}, textInput, {
})

const styles = StyleSheet.create({
  container,
  invalidTextInput: {
    height: 40,
    width: '60%',
    backgroundColor: colors.white,
    fontSize: 24,
    borderColor: colors.error,
    borderWidth: 3
  },
  textInput,
  button
})

export default styles