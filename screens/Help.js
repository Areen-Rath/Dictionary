/**
 * The Help screen consists of steps for help in anything
 * related to the app and FAQs.
 */

import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Help extends React.Component {
    render(){
        return (
            <ScrollView style={{flex: 1, backgroundColor: "white"}}>
                <View style={styles.topicContainer}>
                    <Text style={styles.header}>Searching a Word Meaning</Text>
                    <Text style={{marginTop: 20}}>1. Type a word.</Text>
                    <Text>2. Click on the Search button.</Text>
                    <Image
                        style={{width: 300, height: 100}}
                        source={require('../assets/search.png')}
                    />
                    <Text>3. You will get the meaning of the word.</Text>
                    <Image
                        style={{width: 300, height: 150}}
                        source={require('../assets/result.png')}
                    />
                </View>
                <View style={styles.topicContainer}>
                    <Text style={styles.header}>Text-to-Speech</Text>
                    <Text style={{marginTop: 20}}>1. Click on the word.</Text>
                    <Text>2. You can hear the pronunciation of the word.</Text>
                </View>
                <View style={styles.topicContainer}>
                    <Text style={styles.header}>FAQs</Text>
                    <Text style={styles.FAQs}>Q: Is this an online or an offline app?</Text>
                    <Text>A: It is an online app.</Text>
                    <Text style={styles.FAQs}>Q: Is this app in development?</Text>
                    <Text>A: Yes, this app is in development but the releases are not buggy.</Text>
                    <Text style={styles.FAQs}>Q: Why can't I see the meanings of the words?</Text>
                    <Text>
                        A: If you can't see the meanings of the words, it may be because of slow or no network. On startup,
                        it may take time for the meanings of the word to be displayed.
                    </Text>
                    <Text style={styles.FAQs}>Q: Why can't I listen to the pronunciation of the words?</Text>
                    <Text>
                        A: If you can't listen to the pronunciation of the words, it may be because of slow or no network.
                        On startup, it may take time for pronunciation of the word to be heard.
                    </Text>
                    <Text style={[styles.FAQs, {marginLeft: -15, textAlign: 'center'}]}>
                        In case of slow network, please wait for the meaning of the word to be displayed or for the
                        pronunciation of the word to be heard.
                    </Text>
                </View>
                <Text style={{marginTop: 30, fontWeight: "bold", textAlign: 'center'}}>Created by Areen Rath</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    topicContainer: {
        marginTop: 20,
        marginLeft: 15
    },
    header: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: "bold"
    },
    FAQs: {
        marginTop: 20
    }
});