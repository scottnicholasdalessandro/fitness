import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddEntry from './components/AddEntry';
import reducer from './reducers';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AddEntry />;
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});
