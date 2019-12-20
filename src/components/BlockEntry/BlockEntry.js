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
          autoFocus={true}
          ref='Blocks'
          keyboardType='numeric'
          onChangeText={number => this.props.setBlocks(number)}
          placeholder={'Blocks'}
          style={this.props.valid ? styles.textInput : styles.invalidTextInput}
          value={this.props.blocks ? `${this.props.blocks}` : null}
        />
        <Button
          ref='Clear'
          onPress={() => this.props.setBlocks(0)}
          style={styles.button}
          title={'Clear'}
        />
      </View>
    )
  }
}

export default BlockEntry
