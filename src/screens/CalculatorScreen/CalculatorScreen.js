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

import { setBlocks, setLens } from '../../redux/calculator/actions'

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
        <LensSelect
          lens={this.props.calculator.lens}
          setLens={this.props.setLens}
        />
        <BlockEntry
          blocks={this.props.calculator.blocks}
          setBlocks={this.props.setBlocks}
          valid={this.props.calculator.valid}
        />
        <Result
          result={this.props.calculator.result}
          valid={this.props.calculator.valid}
        />
      </View>
    )
  }
}

export default connect(
  state => ({
    calculator: state.calculator
  }),
  dispatch => ({
    setLens: lens => dispatch(setLens(lens)),
    setBlocks: block => dispatch(setBlocks(block)),
  })
)(CalculatorScreen)