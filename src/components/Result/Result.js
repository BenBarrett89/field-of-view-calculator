import React from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './styles'

class Result extends React.Component {
  render() {
    return (
      <View
        style={this.props.valid ? styles.container : styles.invalidContainer}
      >
        <Text style={styles.result}>{this.props.result}mm</Text>
      </View>
    )
  }
}

export default Result
