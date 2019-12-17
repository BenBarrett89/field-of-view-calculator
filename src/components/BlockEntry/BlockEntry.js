import React from 'react'
import {
  Button,
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
        <Button title={'Clear'}/>
      </View>
    )
  }
}

export default BlockEntry
