import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.analogous,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '45%',
    borderColor:
      'gray',
    borderWidth: 1
  }
})

export default styles