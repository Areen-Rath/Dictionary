/**
 * The input box is used for entering a word.
 */

import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class InputBox extends React.Component {
    render(){
        return (
            <TextInput
                style={styles.inputBox}
                placeholder={this.props.placeholder}
                onChangeText={this.props.onChangeText}
            />
        );
    }
}

const styles = StyleSheet.create({
    inputBox: {
        marginTop: 20,
        width: "80%",
        height: 40,
        borderWidth: 2,
        alignSelf: 'center',
        textAlign: 'center'
    }
})