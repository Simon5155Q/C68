import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Fb from './screens/fb';
import In from './screens/in';

const screens = createBottomTabNavigator({
  fb: Fb,
  in:In
});

const AppsContainer = createAppContainer(screens);

export default class App extends Component() {
  render(){
      return (
          <View style={styles.container}>
            <AppsContainer/>
          </View>
        );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
