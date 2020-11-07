import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image,Keyboard, StyleSheet,KeyboardAvoidingView,TouchableWithoutFeedback } from 'react-native';
export default class LogIn extends Component {

  constructor(){
    super();
    this.state={
        user:''
    }
  }

  render() {
    const{stage} = this.props;
    const {user} = this.state;
    return (
      <View>
      <View style = {styles.rowContainer}>
      <Text style = {styles.text}>Log In</Text>
      </View>
      <View style = {styles.container} >
        <Text style = {[styles.text]} >User Name:</Text>
        <TextInput style = {styles.TextInput} placeHolder='User Name' placeholderTextColor='#000000' onChangeText ={(user)=>{this.setState({user})}}  value = {user}/>
        <View style = {[styles.cContainer,{marginTop:15,marginBottom:15}]}>
          <Text style = {styles.text} >Password:</Text>
          <TextInput style = {styles.TextInput} placeHolder='Password' secureTextEntry={true}/>
        </View>
        <TouchableOpacity style = {[styles.buttonC,{margin:15}]} onPress={()=>stage(5,user)}>
            <Text style = {styles.textBoton}>Continue</Text>
          </TouchableOpacity>
        </View>
        </View>
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