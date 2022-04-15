import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Title from './src/components/Title/';
import Form from './src/components/Form/';
import Login from './src/components/Login/'
import {LargeButton, SmallButton} from './src/components/Button/';
import {Footer} from './src/components/Footer/footer.js'

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      {/*<Title/>
      <LargeButton text='Cadastrar'/>
      <SmallButton text='Não'/>
      <Form/>*/}
      <Login/>
      <Footer/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    paddingTop:40,
    paddingBottom:60,
  },
});
