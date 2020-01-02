import React from 'react'
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import lenses from '../../config/lenses'
import styles from './styles'

class LensSelect extends React.Component {
  render() {
    const { setLens } = this.props
    const selectedLens = this.props.lens
    return (
      <View style={styles.container}>
        {
          lenses.map(lens => {
            const selected = lens.label === selectedLens.label
            return (
              <TouchableHighlight
                ref={`${lens.label}Lens`}
                onPress={() => setLens(lens)}
                key={lens.label}
                style={
                  selected
                    ? styles.selected
                    : styles.touchable
                }
              >
                <View>
                  <Text style={
                    selected
                      ? styles.selectedText
                      : styles.touchableText
                  }>{lens.label}</Text>
                </View>
              </TouchableHighlight>
            )
          })
        }
      </View>
    )
  }
}

export default LensSelect
