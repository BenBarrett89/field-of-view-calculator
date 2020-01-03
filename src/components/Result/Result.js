import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import styles, { errorIcon } from './styles'

class Result extends React.Component {
  render() {
    const { error, result, valid } = this.props
    return (
      <View
        style={valid ? styles.container : styles.invalidContainer}
      >
        {error
          ? <MaterialIcons name="error" size={errorIcon.size} color={errorIcon.color} />
          : <Text style={styles.result}>{result}mm</Text>
        }
      </View>
    )
  }
}

export default Result
