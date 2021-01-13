import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {StyleSheet, ScrollView, Image, View, Text, Button} from 'react-native';
import Logo from './assets/pics/home_icon.png';
import { CommonActions } from '@react-navigation/native'

class SideDrawer extends Component {

    navigateToScreen = (route) => () => {
        this.props.navigation.dispatch(
            CommonActions.navigate({
                name: route,
                params: {},
            })
        )
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                <ScrollView>
                    <View>
                        <View>
                            <Image 
                            source={Logo}
                            style={{width: 40, height: 40}}/>
                        </View>
                    </View>
                    <Text>Section 1</Text>
                    <View>
                        <Text>Home</Text>
                        <Text>Home</Text>
                        <Text>Home</Text>
                        <Text>Home</Text>
                    </View>
                </ScrollView>
                <View style={{paddingLeft:10, paddingBottom:30}}>
                    <Text>Copyright @ chloe 2020</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    contaier: {
        flex:1, 
        paddingTop: 80
    },
    imageContainer: {
        alignItems: 'center',
        padding: 50,
    }
})
export default DrawerHomeScreen;