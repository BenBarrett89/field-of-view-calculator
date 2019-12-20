import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

const container = {
  // Flex Item properties
  flexGrow: 1,
  // Flex Container properties
  alignContent: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  // Color Properties
  backgroundColor: colors.background,
}

const styles = StyleSheet.create({
  container
})

export default styles