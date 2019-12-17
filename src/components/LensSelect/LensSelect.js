import React from 'react'
import {
  Button,
  Text,
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
              <Button
                key={lens.label}
                style={styles.button}
                title={lens.label}
              />
            )
          })
        }
      </View>
    )
  }
}

export default LensSelect
