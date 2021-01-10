import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

class DrawerUserScreen extends Component {

    headerStyle = () => {
        this.props.navigation.setOptions({
            title: 'User Screen',
              headerStyle: {
                backgroundColor: 'blue'
            },
            headerTintColor: 'yellow',
            headerTitleStye: {
              fontWeight: 'bold',
              color: 'purple'
        },
        headerBackTitle: 'BACK',
        headerRight: () => (
            <Button 
              title="Go Back"
              onPress= {() => {this.props.navigation.navigate('Home')}}
              color='orange'
              /> )
    })
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>User Screen</Text>
                <Button title = "To Home Screen"
                onPress = {()=> {
                    this.props.navigation.navigate('Home')
                }}
                />
            </View>
        )
    }
}
export default DrawerUserScreen;