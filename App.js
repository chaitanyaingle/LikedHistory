import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList,
         Image, TouchableHighlight } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import PetList from './src/components/PetList/PetList';
import Banner from './src/components/Banner/Banner';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.banView}>
          <Banner/>
        </View>
        <View style = {styles.listView}>
          <PetList/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  banView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#37BBCB',
   marginBottom: 5,
  },
  listView: {
    flex: 12,
  },
});
