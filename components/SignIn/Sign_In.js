import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image,Keyboard, StyleSheet,KeyboardAvoidingView,TouchableWithoutFeedback } from 'react-native';
export default class SingIn extends Component {

  render() {
    const {stage} = this.props
    return (
      <TouchableWithoutFeedback onPress = {()=>Keyboard.dismiss()}keyboardShouldPersistTaps='handled'>
        <KeyboardAvoidingView
        style={styles.container}>
      <View style = {styles.rowContainer}>
      <Text style = {styles.text}>Sign In</Text>
      </View>
      <View style = {styles.containerR} >
        <TouchableOpacity style = {[styles.buttonC,{margin:15}]} onPress={() => stage(2)}>
            <Text style = {styles.textBoton}>Cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.buttonC,{margin:15}]} onPress={() => stage(3)}>
            <Text style = {styles.textBoton}>Empresas</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems: 'center',
      backgroundColor: '#F4F5EF',
      flexDirection: 'column',
      marginTop:50
  },
  containerR: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop:50
},
  text:{
      color:'black',
      fontWeight:'bold',
      fontSize:40,
      textAlign: 'center'
  },
  TextButtonX:{
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:20,
    color: '#ffffff',
    alignSelf: 'center',
  },
  TextInput:{
    borderWidth: 1,
    borderRadius: 5,
    height: 20,
    width: 250, 
    textAlign: 'center',
  },
  textBoton:{
      fontStyle:'normal',
      fontWeight:'bold',
      fontSize:10,
      color: 'black',
      alignSelf: 'center',
  },
  button:{
      padding: 5,
      borderRadius: 5,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      height: 40,
      width: 80, 
      backgroundColor: '#1e90ff',
      alignSelf: 'center',
      margin:5,
      padding: 10
  },
  buttonC:{
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: 40,
    width: 80, 
    backgroundColor: '#F4F5EF',
    alignSelf: 'center',
    margin:5,
    padding: 10,
    borderWidth:1,
},
  rowContainer:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width:300
  },
  cContainer:{
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width:300
  },
})