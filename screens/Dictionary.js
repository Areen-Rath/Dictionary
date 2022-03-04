/**
 * The Dictionary screen consists of the input box, search button
 * and few lines for help.
 */

import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InputBox from '../components/InputBox';
import SearchButton from '../components/SearchButton';
import SpeechButton from '../components/SpeechButton';

export default class Dictionary extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '',
            word: '',
            wordData: []
        }
    }

    getWordData = async () => {
        const { input } = this.state;

        this.setState({
            word: input.toLowerCase(),
            wordData: []
        });

        var url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;

        // Fetching data from the URL
        await fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                // A word data array for storing the data.
                var wordDataArr = [];

                /**
                 * We check whether the meaning of the word is present
                 * with a key named title from response data. If title
                 * is absent, then we fetch the data and if it's present
                 * we show "Not Found" for the word.
                 */
                if(!responseJson.title) {
                    for(var i in responseJson) {
                        var meanings = responseJson[i].meanings;
                        meanings.map(item => {
                            wordDataArr.push([item.partOfSpeech.toUpperCase(), item.definitions[0].definition]);
                        });
                    }
                } else {
                    wordDataArr = [["NOT FOUND", "Not Found"]]
                }

                this.setState({
                    wordData: wordDataArr
                });
            })
    }

    renderItem = (item) => {
        return (
            <View style={{marginTop: 20}}>
                <Text>{item.item[0]}</Text>
                <Text>{item.item[1]}</Text>
            </View>
        );
    }

    render(){
        return (
            <ScrollView style={{flex: 1, backgroundColor: "white"}} keyboardShouldPersistTaps="handled">
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <InputBox
                        placeholder="Enter a word"
                        onChangeText={(text) => {
                            this.setState({
                                input: text
                            });
                        }}
                    />
                </View>
                <SearchButton onPress={() => {
                    if(this.state.input){
                        this.getWordData();
                    }
                }} />
                <View style={{marginTop: 20, marginLeft: 15}}>
                    <SpeechButton text={this.state.word} />
                    <FlatList
                        data={this.state.wordData}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={{marginTop: 50}}>
                    <Text style={{textAlign: 'center'}}>Type a word and click on Search. You will get the meaning of the word.</Text>
                    <Text style={{marginTop: 10, textAlign: 'center'}}>Click on the word and you can hear the pronunciation of the word.</Text>
                    <Text style={{marginTop: 10, fontWeight: "bold", textAlign: 'center'}}>Created by Areen Rath</Text>
                </View>
            </ScrollView>
        );
    }
}