import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

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
  flexGrow: 1,
  // Flex Container properties
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'space-around',
  // Style
  backgroundColor: colors.primary,
}

const selected = Object.assign({}, touchable, {
  backgroundColor: colors.complimentary,
})

const styles = StyleSheet.create({
  container,
  touchable,
  selected
})

export default styles