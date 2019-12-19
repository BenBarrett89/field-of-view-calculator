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
          keyboardType='numeric'
          onChangeText={number => this.props.setBlocks(number)}
          placeholder={'Blocks'}
          style={styles.textInput}
          value={this.props.blocks}
        />
        <Button
          onPress={() => this.props.setBlocks(0)}
          style={styles.button}
          title={'Clear'}
        />
      </View>
    )
  }
}

export default BlockEntry
