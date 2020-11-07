import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import logo from './Logo_EMO.png';

export default class Cli extends React.Component{

constructor(){
    super();
    this.state={

    }
}


render(){
    const {stage} = this.props;
    return(
        <View  style = {styles.container}>
            <Image source = {logo} resizeMode='contain' style={styles.logo}/>
            <Text style = {styles.text}>Bienvenido</Text>
            <View style = {styles.button_container}>
            <TouchableOpacity style = {styles.button} underlayColor='#1e90ff' onPress = {()=> stage(5)}>
                <Text style = {styles.textBoton}>Comenzar</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',

    },
    conner:{
        height: '25%',
        width: '100%',
        marginBottom: -100,
    },
    logo:{
        width: '100%',
        height: '50%',
        top: -100,

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
