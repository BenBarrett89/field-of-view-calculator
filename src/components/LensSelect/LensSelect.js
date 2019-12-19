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
    return (
      <View style={styles.container}>
        {
          lenses.map(lens => {
            return (
              <TouchableHighlight
                onPress={() => this.props.setLens(lens)}
                key={lens.label}
                style={lens.label === this.props.lens.label ? styles.selected : styles.touchable}
              >
                <View>
                  <Text>{lens.label}</Text>
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
