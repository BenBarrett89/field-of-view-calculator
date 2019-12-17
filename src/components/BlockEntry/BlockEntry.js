import React from 'react'
import {
  TextInput,
  View
} from 'react-native'

import styles from './styles'

class BlockEntry extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={'Blocks'}
          style={styles.textInput}
          keyboardType='numeric'
        />
      </View>
    )
  }
}

export default BlockEntry
