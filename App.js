/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TextInput, Button, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import Header from './src/header'
import Generator from './src/generator'
import NumList from './src/numlist'
import Input from './src/input'
import Picker from './src/picker'
import Earphone from './assets/images/earphone.jpg'


class App extends Component {

  state = {
    appName: 'react_test_app',
    random: [36, 999]
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum]
      }
    })
  }

  onNumDelete = (position) => {
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    })
    this.setState({
      random: newArray
    })
  }

  state = {
    myTextInput: '',
    alphabet: ['a', 'b', 'c', 'd']
}

onChangeInput = (event) => {
    this.setState({
        myTextInput: event
    })
}

  onAddTextInput = () => {
    this.setState(prevState =>{
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput]
      }
    })
  }

  render() {
    return (
      
      <View style={styles.mainView}>
        <Image style={styles.image}
        resizeMode="contain" 
          source={Earphone}
          onLoadEnd={()=>alert('Image Loaded')}/>
        {/* <Header name={this.state.appName}/>
        <View>
          <Text style={styles.mainText} onPress={()=>alert('Text touch event')}>
            Hello world
          </Text>
        </View>
        <ScrollView style={{width: '100%'}}>
          <Generator add={this.onAddRandomNum}/>
          <NumList num={this.state.random}
          delete={this.onNumDelete}/>
        </ScrollView> */}
        <Picker/>
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={true}
          maxLength={100}
          autoCapitalize={'none'}
          editable={true} />
        <Button title="Add Text Input"
          onPress={this.onAddTextInput} />
          <ScrollView style={{width: '100%'}}>
            {
              this.state.alphabet.map((item, idx) => (
                <Text style={styles.mainText}>
                  {item}
                </Text>
              ))
            }
          </ScrollView>
        <Input />


      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: "100%",
    backgroundColor: "#cecece",
    marginTop: 20,
    fontSize: 25,
    padding: 10
},
mainView: {
  fontSize: 20,
  fontWeight: 'normal',
  color: 'red', 
  padding: 20,
  margin: 20,
  backgroundColor: pink
},
image: {
  width:"100%",
  height: 700
}
})

export default App;
