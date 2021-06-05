import React, {Component} from 'react';
import { Text, View, ScrollView, SafeAreaView, StatusBar, Image } from 'react-native';
import CardStyle from './src/CardStyle';
import ClassComponent from './src/ClassComponent';
import Photo from './src/Photo';
import TestStyle from './src/TestStyle';
import MyScreen from './src/MyScreen';
import UseState from './src/UseState';
import Login from './src/pages/login.js';

const App = () => {
  return (
    <View>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        {/* <ScrollView > */}
          
          {/* <TestStyle /> */}
          {/* <Photo /> */}
          {/* <ClassComponent /> */}
          {/* <CardStyle /> */}
          {/* <MyScreen /> */}
          {/* <UseState /> */}
          <Login />

        {/* </ScrollView> */}
      </SafeAreaView>
    </View>
  );
};

export default App;