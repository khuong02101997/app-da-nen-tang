/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import firebase from 'firebase';
export default class JointRoom extends Component {
  static navigationOptions = {
    title: 'Welcome to Chat Group',
  };
  state = {
    name: '',
  };
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyCEw5oHq_AsN3XDFGQE6EPzcGiUTxaUVqY',
      authDomain: 'chat-8cdd3.firebaseapp.com',
      databaseURL: 'https://chat-8cdd3.firebaseio.com',
      projectId: 'chat-8cdd3',
      storageBucket: '',
      messagingSenderId: '1070653971617',
      appId: '1:1070653971617:web:fbddafde093b8c415064e0',
      measurementId: 'G-P4R96M5KBN',
    };
    firebase.initializeApp(config);
  }
  _onChangeName = text => {
    this.setState({
      name: text,
    });
  };
  _toChatRoom = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(user => {
        AsyncStorage.setItem('name', this.state.name);
        this.props.navigation.navigate('ChatRoom');
      })
      .catch(err => alert(err));
  };
  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: 10,
          paddingBottom: 15,
        }}>
        <Text>Tên của bạn :</Text>
        <TextInput
          placeholder=""
          style={{
            borderColor: '#A5A5A5',
            borderWidth: 0.5,
            padding: 8,
            width: '100%',
            marginBottom: 15,
            marginTop: 15,
          }}
          onChangeText={text => this._onChangeName(text)}
        />
        <TouchableOpacity onPress={() => this._toChatRoom()}>
          <Text style={{fontWeight: 'bold'}}>Vào Phòng</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
