import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

const styles = StyleSheet.create({
  container: {
    // Flex Item properties
    flexGrow: 1,
    height: '30%',
    width: '50%',
    // Flex Container properties
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // Color properties
    backgroundColor: colors.analogousVariant,
  },
  result: {
    color: colors.white,
    fontSize: 40
  }
})

export default styles