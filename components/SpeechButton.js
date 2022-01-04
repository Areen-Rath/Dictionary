/**
 * The speech button is used for converting text to speech.
 */

import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

export default class SearchButton extends React.Component {
    speak = async () => {
        Speech.speak(this.props.text);
    }

    render(){
        return (
            <TouchableOpacity
                style={{alignSelf: 'flex-start'}}
                onPress={() => {this.speak()}}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 30
    }
});