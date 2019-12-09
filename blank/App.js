import React, { Component } from 'react'
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Platform,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View
} from 'react-native'

const pic = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
}

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

class Blink extends Component {

  componentDidMount() {
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
})

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

const buttonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

class ButtonBasics extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  render() {
    return (
      <View style={buttonStyles.container}>
        <View style={buttonStyles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={buttonStyles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={buttonStyles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const touchablesStyles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }
})

class Touchables extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }


  render() {
    return (
      <View style={touchablesStyles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={touchablesStyles.button}>
            <Text style={touchablesStyles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={touchablesStyles.button}>
            <Text style={touchablesStyles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={touchablesStyles.button}>
            <Text style={touchablesStyles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
          onPress={this._onPressButton}
        >
          <View style={touchablesStyles.button}>
            <Text style={touchablesStyles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={touchablesStyles.button}>
            <Text style={touchablesStyles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

class Scrollable extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 96 }}>What's the best</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 96 }}>Framework around?</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
    );
  }
}

const flatListStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

class FlatListBasics extends Component {
  render() {
    return (
      <View style={flatListStyles.container}>
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]}
          renderItem={({ item }) => <Text style={flatListStyles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const sectionListStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

class SectionListBasics extends Component {
  render() {
    return (
      <View style={sectionListStyles.container}>
        <SectionList
          sections={[
            { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
            { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
          ]}
          renderItem={({ item }) => <Text style={sectionListStyles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={sectionListStyles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

class FetchExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}


export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Greeting name='world' />
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Blink text='I love to blink' />
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
        <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
        {/* <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} /> */}
        <PizzaTranslator />
        <ButtonBasics />
        <Touchables />
        <Scrollable />
        {/* https://github.com/react-native-community/react-native-viewpager */}
        <FlatListBasics />
        <SectionListBasics />
        <FetchExample />
        {/* https://facebook.github.io/react-native/docs/network#using-other-networking-libraries */}
        {/* http://www.awesome-react-native.com/ */}
        {/* https://facebook.github.io/react-native/docs/components-and-apis */}
        {/* https://facebook.github.io/react-native/docs/navigation */}
        {/* https://facebook.github.io/react-native/docs/images */}
        {/* https://facebook.github.io/react-native/docs/animations */}
        {/* https://facebook.github.io/react-native/docs/improvingux */}
        {/*  */}
      </View >
    );
  }
}
