import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.analogousVariant,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

export default styles