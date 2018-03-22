/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//||||||||| chat Main Code Start |||||||||||||||||||||||||||||||||||||||||||||||
import XMPP from 'react-native-xmpp';

var JID = 'admin@192.168.4.246';
//var DOMAIN = '192.168.4.246';

XMPP.on('message', (message) => console.log('MESSAGE:' + JSON.stringify(message)));
XMPP.on('iq', (message) => console.log('IQ:' + JSON.stringify(message)));
XMPP.on('presence', (message) => console.log('PRESENCE:' + JSON.stringify(message)));
XMPP.on('error', (message) => console.log('ERROR:' + message));
XMPP.on('loginError', (message) => console.log('LOGIN ERROR:' + message));
XMPP.on('login', (message) => console.log('LOGGED!'));
XMPP.on('connect', (message) => console.log('CONNECTED!'));
XMPP.on('disconnect', (message) => console.log('DISCONNECTED!'));

// trustHosts (ignore self-signed SSL issues)
// Warning: Do not use this in production (security will be compromised).
//XMPP.trustHosts(['10.0.3.2']);

// connect
XMPP.connect('kunal@192.168.4.246', 'root');
console.log('is Connection established?');
  
// send message
XMPP.message('Hello world!' , JID);

// disconnect
XMPP.disconnect();

// remove all event listeners (recommended on componentWillUnmount)
//XMPP.removeListeners();

// remove specific event listener (type can be 'message', 'iq', etc.)
//XMPP.removeListener(TYPE);
//RNXMPP.SCRAMSHA1

//||||||||||||||||||||||||||| Chat Main Code Finished ||||||||||||||||||||||||||||||||||||||||||||||||||
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text>
          Hello Kunal!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
