import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const Generator = (props) => {
    return (
        <View style = {styles.generator} >
            <Button title="Add Number" onPress={()=>props.add()}>
                
            </Button>
        </View>

    )
    }

const styles = StyleSheet.create({
    generator:{
        backgroundColor: "#D197CF", 
        padding: 5,
        width: '100%'
    }
    
})

export default Generator;