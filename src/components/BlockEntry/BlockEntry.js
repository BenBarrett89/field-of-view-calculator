import React from 'react'
import {
  Button,
  TextInput,
  View
} from 'react-native'

import styles from './styles'

class BlockEntry extends React.Component {
  render() {
    const {
      blocks,
      setBlocks,
      valid
    } = this.props
    return (
      <View style={valid ? styles.container : styles.invalidContainer}>
        <TextInput
          autoFocus={true}
          ref='Blocks'
          keyboardType='numeric'
          onChangeText={number => setBlocks(number)}
          placeholder={'Blocks'}
          style={valid ? styles.textInput : styles.invalidTextInput}
          value={blocks ? `${blocks}` : null}
        />
        <Button
          ref='Clear'
          onPress={() => setBlocks(0)}
          style={styles.button}
          title={'Clear'}
        />
      </View>
    )
  }
}

export default BlockEntry
