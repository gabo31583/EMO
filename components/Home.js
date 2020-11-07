import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Upper_Conner from './Images_Home/Upper_coners.png';
import logo from './Images_Home/Logo_EMO.png';
import Lower_Conner from './Images_Home/Lower_conner.png'
export default class Home extends React.Component{

constructor(){
    super();
    this.state={

    }
}



render(){
    const {stage} = this.props
    return(
        <View  style = {styles.container}>
            <Image source={Upper_Conner} resizeMode='contain' style={styles.conner}/>
            <Image source = {logo} resizeMode='contain' style={styles.logo}/>
            <View style = {styles.button_container}>
            <TouchableOpacity style = {[styles.button,{marginRight:100}]} underlayColor='#1e90ff' onPress = {() => stage(2)}>
                <Text style = {styles.textBoton}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} underlayColor='#1e90ff' onPress = {() => stage(3)}>
                <Text style = {styles.textBoton}>Sign Up</Text>
            </TouchableOpacity>
            </View>
            <Image source={Lower_Conner} resizeMode='contain' style={styles.conner}/>
        </View>
    );
}


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',

    },
    conner:{
        height: '25%',
        width: '100%',
        marginBottom: -100,
    },
    logo:{
        width: '100%',
        height: '50%',

    },
    button_container:{
        flexDirection: 'row', 
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    textBoton:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:20,
        color: 'black',
        alignSelf: 'center',
    },
    button:{
        padding: 5,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        height: 50,
        width: 100, 
        backgroundColor: '#F4F5EF',
        alignSelf: 'center',
        margin:5,
        padding: 10
    },
})
