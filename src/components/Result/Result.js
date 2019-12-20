import React from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './styles'

class Result extends React.Component {
  render() {
    const { result, valid } = this.props
    return (
      <View
        style={valid ? styles.container : styles.invalidContainer}
      >
        <Text style={styles.result}>{result}mm</Text>
      </View>
    )
  }
}

export default Result
