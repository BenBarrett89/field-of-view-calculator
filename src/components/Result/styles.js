import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

const colorMapping = {
  containerBackgroundColor: colors.accent,
  invalidContainerBackgroundColor: colors.errorVariant,
  resultTextColor: colors.text,
}

const container = {
  // Flex Item properties
  flexGrow: 1,
  height: '30%',
  width: '50%',
  // Flex Container properties
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-around',
  // Color properties
  backgroundColor: colorMapping.containerBackgroundColor,
}

const result = {
  color: colorMapping.resultTextColor,
  fontSize: 40
}

const invalidContainer = Object.assign({}, container, {
  backgroundColor: colorMapping.invalidContainerBackgroundColor
})

export const errorIcon = {
  color: colorMapping.resultTextColor,
  size: result.fontSize * 3,
}

const styles = StyleSheet.create({
  container,
  invalidContainer,
  result,
})

export default styles