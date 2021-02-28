import React, {Component} from 'react';
import { Text, View, ScrollView, SafeAreaView, StatusBar, Image } from 'react-native';
import CardStyle from './src/CardStyle';
import ClassComponent from './src/ClassComponent';
import Photo from './src/Photo';
import TestStyle from './src/TestStyle';

const App = () => {
  return (
    <View>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <ScrollView >
          
          {/* <TestStyle /> */}
          {/* <Photo /> */}
          {/* <ClassComponent /> */}
          <CardStyle />

        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;