import React from 'react'
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { softMaximumBlocks } from '../../config/constants'

import styles, { messageIcon } from './styles'

class BlockEntry extends React.Component {
  render() {
    const {
      blocks,
      error,
      setBlocks,
      valid
    } = this.props
    return (
      <View style={valid ? styles.container : styles.invalidContainer}>
        <TextInput
          autoFocus={true}
          ref='Blocks'
          keyboardType='numeric'
          maxLength={3}
          onChangeText={number => setBlocks(number)}
          placeholder={'Blocks'}
          selectTextOnFocus={true}
          style={valid ? styles.textInput : styles.invalidTextInput}
          value={blocks ? `${blocks}` : null}
        />
        <View styles={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => setBlocks(0)}
            style={valid ? styles.button : styles.invalidButton}
          >
            <Text
              style={valid ? styles.buttonText : styles.invalidButtonText}
            >
              Clear
            </Text>
          </TouchableOpacity>
        </View>
        {valid
          ? blocks > 0
            ? <View style={styles.messageContainer} />
            : <View style={styles.messageContainer}>
              <MaterialIcons name={'input'} size={messageIcon.size} color={messageIcon.accentColor} />
              <Text style={styles.messageText}>
                Please enter the number of blocks
              </Text>
            </View>
          : <View style={styles.messageContainer}>
            <MaterialIcons name={error ? 'error' : 'warning'} size={messageIcon.size} color={messageIcon.color} />
            <Text style={styles.messageText}>
              {
                error
                  ? `The number of blocks is not numeric`
                  : `The number of blocks exceeds ${softMaximumBlocks} or is less than 0`
              }
            </Text>
          </View>
        }
      </View>
    )
  }
}

export default BlockEntry
