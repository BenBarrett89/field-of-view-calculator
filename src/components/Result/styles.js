import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

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
  backgroundColor: colors.analogousVariant,
}

const result = {
  color: colors.white,
  fontSize: 40
}

const invalidContainer = Object.assign({}, container, {
  backgroundColor: colors.error
})

const styles = StyleSheet.create({
  container,
  invalidContainer,
  result,
})

export default styles