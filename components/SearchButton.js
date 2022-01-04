/**
 * The search button is used for fetching data. It
 * is not defined here as the state is in the screen
 * code.
 */

import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class SearchButton extends React.Component {
    render(){
        return (
            <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        width: 100,
        height: 30,
        backgroundColor: "red",
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white"
    }
});