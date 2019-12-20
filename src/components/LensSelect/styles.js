import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

const colorMapping = {
  selectedBackgroundColor: colors.complimentary,
  selectedTextColor: colors.white,
  touchableBackgroundColor: colors.primary,
  touchableTextColor: colors.white,
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

const selected = Object.assign({}, touchable, {
  backgroundColor: colorMapping.selectedBackgroundColor,
})

const styles = StyleSheet.create({
  container,
  touchable,
  selected,
})

export default styles