import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

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

const styles = StyleSheet.create({
  container: {
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
  },
  touchable,
  selected: Object.assign({}, touchable, {
    backgroundColor: colors.complimentary,
  })
})

export default styles