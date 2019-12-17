import React from 'react'
import {
  Button,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'

import styles from './styles'

import BlockEntry from '../../components/BlockEntry'
import LensSelect from '../../components/LensSelect'
import Result from '../../components/Result'

class CalculatorScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Field of View Calculator'
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <LensSelect />
        <BlockEntry />
        <Result />
      </View>
    )
  }
}

export default connect(
  state => ({ count: state.count }),
  dispatch => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  })
)(CalculatorScreen)