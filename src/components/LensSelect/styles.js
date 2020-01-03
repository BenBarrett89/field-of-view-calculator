import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

const colorMapping = {
  selectedBackgroundColor: colors.accent,
  selectedTextColor: colors.text,
  touchableBackgroundColor: colors.primary,
  touchableHighlightColor: colors.primaryLight,
  touchableTextColor: colors.textPrimary,
}

const container = {
  // Flex Item properties
  flexGrow: 1,
  height: '30%',
  width: '100%',
  // Flex Container properties
  alignItems: 'stretch',
  alignContent: 'stretch',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
}

const touchable = {
  // Flex Item properties
  flexDirection: 'column',
  flexGrow: 1,
  // Flex Container properties
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'space-around',
  // Style
  backgroundColor: colorMapping.touchableBackgroundColor,
}

const touchableText = {
  color: colorMapping.touchableTextColor,
  fontSize: 18,
  fontWeight: 'normal',
}

const selected = Object.assign({}, touchable, {
  backgroundColor: colorMapping.selectedBackgroundColor,
})

const selectedText = {
  color: colorMapping.selectedTextColor,
  fontSize: 18,
  fontWeight: 'bold',
}

const styles = StyleSheet.create({
  container,
  touchable,
  touchableText,
  selected,
  selectedText,
})

export const touchableHighlightColor = colorMapping.touchableHighlightColor

export default styles