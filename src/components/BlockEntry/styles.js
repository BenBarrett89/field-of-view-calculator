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
    flexDirection: 'column',
    justifyContent: 'space-around',
    // Color properties
    backgroundColor: colors.analogous,
  },
  textInput: {
    height: 40,
    width: '60%',
    backgroundColor: colors.white,
    fontSize: 24
  },
  button: {

  }
})

export default styles