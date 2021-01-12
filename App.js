/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';
import DrawerHomeScreen from './src/home_drawer';
import DrawerUserScreen from './src/user_drawer';
import { Linking } from 'react-native';
import SideDrawer from './src/my_drawer';
// import { TextInput, Button, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
// import Header from './src/header'
// import Generator from './src/generator'
// import NumList from './src/numlist'
// import Input from './src/input'
// import Picker from './src/picker'
// import Earphone from './assets/images/earphone.jpg'
// import Modal from './src/modal';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props}/>
//       <DrawerItem
//         label="Help"
//         onPress={()=>Linking.openURL('http://www.google.com')}
//         icon={()=><LogoTitle/>}
//         />
//         <DrawerItem
//         label="Info"
//         onPress={()=>alert('Info Window')}
//         />
//     </DrawerContentScrollView>
//   )
// }

class App extends Component {

  // logotitle = () => {
  //   return (
  //     <Image
  //     style={{width: 40, height: 40}}
  //     source={require('./src/assets/pics/home.png')}
  //     />
  //   )
  // }



  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerType="front"
          drawerPosition="right"
          drawerStyle={{
            backgroundColor: '#c6cbef',
            width: 200
          }}
          drawerContentOptions={{
            activeTintColor: 'red',
            activeBackgroundColor: 'skyblue'
          }}
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={DrawerHomeScreen}/>
          <Drawer.Screen name="User" component={DrawerUserScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName="Home"
      //   screenOptions={{
      //     headerStyle: {
      //       backgroundColor: '#a4511e'
      //     },
      //     headerTintColor: '#fff',
      //     headerTitleStyle: {
      //       color: 'purple'
      //     }
      //   }}>
      
      //     <Stack.Screen 
      //       name="Home" 
      //       component={HomeScreen}
      //       options={{title: 'Home Screen',
      //       headerTitle: <LogoTitle/>,
      //       headerRight: () => (
      //         <Button 
      //           title="Info"
      //           onPress= {() => alert('I am a Button!')}
      //           color='orange'
      //           /> 
      //       )}}/>
      //     <Stack.Screen 
      //       name="User" 
      //       component={UserScreen}
      //       initialParams={{
      //         userIdx: 50,
      //         userName: 'Gildong',
      //         userLastName: 'Go'}}
      //         options={{title: 'User Screen',
      //         headerStyle: {
      //           backgroundColor: 'pink'
      //       },
      //       headerTintColor: 'red',
      //       headerTitleStye: {
      //         fontWeight: 'bold',
      //         color: 'purple'
      //       }
      //       }
      //       }/>
      //   </Stack.Navigator>
      // </NavigationContainer>
    )
  }

//   state = {
//     appName: 'react_test_app',
//     random: [36, 999]
//   }

//   onAddRandomNum = () => {
//     const randomNum = Math.floor(Math.random() * 100) + 1;
//     this.setState(prevState => {
//       return {
//         random: [...prevState.random, randomNum]
//       }
//     })
//   }

//   onNumDelete = (position) => {
//     const newArray = this.state.random.filter((num, index) => {
//       return position != index;
//     })
//     this.setState({
//       random: newArray
//     })
//   }

//   state = {
//     myTextInput: '',
//     alphabet: ['a', 'b', 'c', 'd']
// }

// onChangeInput = (event) => {
//     this.setState({
//         myTextInput: event
//     })
// }

//   onAddTextInput = () => {
//     this.setState(prevState =>{
//       return {
//         myTextInput: '',
//         alphabet: [...prevState.alphabet, prevState.myTextInput]
//       }
//     })
//   }

//   render() {
//     return (
      
//       <View style={styles.mainView}>
//         <Image/>
//         {/* <Image style={styles.image}
//         resizeMode="contain" 
//           source={Earphone}
//           onLoadEnd={()=>alert('Image Loaded')}/> */}
//         {/* <Header name={this.state.appName}/>
//         <View>
//           <Text style={styles.mainText} onPress={()=>alert('Text touch event')}>
//             Hello world
//           </Text>
//         </View>
//         <ScrollView style={{width: '100%'}}>
//           <Generator add={this.onAddRandomNum}/>
//           <NumList num={this.state.random}
//           delete={this.onNumDelete}/>
//         </ScrollView> */}
//         <Picker/>
//         <TextInput
//           value={this.state.myTextInput}
//           style={styles.input}
//           onChangeText={this.onChangeInput}
//           multiline={true}
//           maxLength={100}
//           autoCapitalize={'none'}
//           editable={true} />
//         <Button title="Add Text Input"
//           onPress={this.onAddTextInput} />
//           <ScrollView style={{width: '100%'}}>
//             {
//               this.state.alphabet.map((item, idx) => (
//                 <Text style={styles.mainText}>
//                   {item}
//                 </Text>
//               ))
//             }
//           </ScrollView>
//         <Input />


//       </View>
//     )
//   }
}

const styles = StyleSheet.create({
//   mainView: {
//     backgroundColor: 'white',
//     paddingTop: 50,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   input: {
//     width: "100%",
//     backgroundColor: "#cecece",
//     marginTop: 20,
//     fontSize: 25,
//     padding: 10
// },
// mainView: {
//   fontSize: 20,
//   fontWeight: 'normal',
//   color: 'red', 
//   padding: 20,
//   margin: 20,
//   backgroundColor: pink
// },
// image: {
//   width:"100%",
//   height: 700
// }
})

export default App;
