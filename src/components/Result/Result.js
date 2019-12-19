import React from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './styles'

class Result extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.result}>{this.props.result}mm</Text>
      </View>
    )
  }
}

export default Result
