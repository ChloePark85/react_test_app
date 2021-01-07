import React, { Component } from 'react';
import { View, Text, Button, Modal } from 'react-native';

class ModalComponent extends Component {
    state = {
        modal: false
    }

    handleModal= () => {
        this.setState({
            modal: this.state.modal ? false: true
        })
    }

    render() {
        return (
            <View>
                <Button title = "Open Modal"
                onPress = {this.handleModal}
                style={{width: "100%"}}/>
                <Modal
                    visible={this.state.modal}
                    animationType={'slide'}
                    onShow={()=>alert('Warning')}>
                    <View 
                    style={{marginTop: 60,
                    backgroundColor: "red"}}>
                        <Text>This is Modal content</Text>
                    </View>
                    <Button title = "Go Back"
                onPress = {this.handleModal}/>
                </Modal>
            </View>
        )
    }
}
export default ModalComponent;