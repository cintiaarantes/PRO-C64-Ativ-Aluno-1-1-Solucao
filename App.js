import * as React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from './localdb';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
    };
  }
  render(){
    return(
      <SafeAreaProvider>
        <View style = {styles.container}>
          <Header
            backgroundColor = {'#9c8210'}
            centerComponent = {{
              text:'App Fonema',
              style: {color:'#ffffff', fontSize: 20}, 
            }}
          />
          <Image
            style = {styles.imageIcon}
            source = {{
              uri: 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',
            }}
          />
          <TextInput
            style = {styles.inputBox}
            onChangeText = {text => {
              this.setState({text: text});
            }}
            value = {this.state.text}
          />
          <TouchableOpacity
            style = {styles.goButton}
            onPress = { () => {
              this.setState({chunks:db[this.state.text].chunks});
            }}>
            <Text style = {styles.buttonText}> Clique </Text>
            </TouchableOpacity>
          <View>
            {this.state.chunks.map((item) => {
              return(
                <TouchableOpacity style={styles.chunkButton}>
                  <Text style={styles.displayText}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </SafeAreaProvider>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    //outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
  chunkButton: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red',
  },
});