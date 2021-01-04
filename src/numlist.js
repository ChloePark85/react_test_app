import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Numlist = (props) => {
    return (
        props.num.map((item, idx) => (
            <TouchableOpacity 
            style = {styles.numList} 
            key={idx}>
            onPress={()=>props.delete}
                <Text>{item}</Text>
            </TouchableOpacity>
        ))
        

    )
    }

const styles = StyleSheet.create({
    numList:{
        backgroundColor: "#cecece", 
        padding: 5,
        width: '100%',
        marginTop: 4,
        alignItems: "center"
    }
    
})

export default Numlist;