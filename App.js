/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Header from './src/header'
import Generator from './src/generator'
import NumList from './src/numlist'


class App extends Component {

  state = {
    appName: 'react_test_app',
    random: [36, 999]
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100)+1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum]
      }
    })
  }

  onNumDelete = () => {
    alert("Delete")
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Header name={this.state.appName}/>
        <View>
          <Text style={styles.mainText} onPress={()=>alert('Text touch event')}>
            Hello world
          </Text>
        </View>
        <Generator add={this.onAddRandomNum}/>
        <NumList num={this.state.random}
        delete={this.onNumDelete}/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    paddingTop: 50, 
    alignItems: "center",
    //justifyContent: "center"
  }
})

export default App;
