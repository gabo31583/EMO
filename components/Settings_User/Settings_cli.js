import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

import HomeB from './Home.jpg';
import settings from './settings.jpg';


import Count from './account.jpg'
import Help from './ayuda.jpg'
import Metod from './Metodos.jpg'

export default class Home extends React.Component{

constructor(){
    super();
    this.state={

    }
}


render(){
    const{stage}= this.props
    return(
        <ScrollView  style = {styles.container}>
            <TouchableOpacity style = {styles.containerList}>
                <Image source = {Count} resizeMode='contain' style={styles.image2}/>
                <Text>Usuario</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.containerList}>
                <Image source = {Metod} resizeMode='contain' style={styles.image2}/>
                <Text>Metodos de pago</Text>
            </TouchableOpacity>
            <TouchableOpacity  style = {styles.containerList}>
                <Image source = {Help} resizeMode='contain' style={styles.image2}/>
                <Text>Ayuda</Text>
            </TouchableOpacity>
            <View style={styles.bar}>
            <TouchableOpacity style = {styles.buttonA} underlayColor='#1e90ff' onPress = {() => stage(5)}>
                <Image  source={HomeB} resizeMode='contain' style={styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} underlayColor='#1e90ff' onPress = {() => stage(6)}>
                <Image  source={settings} resizeMode='contain' style={styles.image}/>
            </TouchableOpacity>
            </View>
        </ScrollView>
    );
}


}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        flexDirection: 'column',
        alignContent: 'center',

    },
    containerList:{
        height:'40%',
        flexDirection:'row',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    buttonA:{
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
        padding: 10,
        marginRight:160,
    },
    rowContainer:{
        height:'30%',
        flexDirection: 'row',
        alignContent: 'center',
    },
    image:{
        height:50,
        width:50    ,
    },
    image2:{
        height:150,
        width:150,
    },
    bar:{
        height:'30%',
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: 'black',
        position:"absolute",
        bottom:-370,

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
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '8%',
        width: '100%',
      },
      nameBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        width: '100%',
        marginTop: 2,
        backgroundColor:'#0b0968',
      },
      buttonEdit:{
        width:70,
        height:30,
        position:'absolute',
        left:'5%',
      },
      buttonNew:{
        position:'absolute',
        right:'5%',
      },
      textNewButton:{
        color:'#0b0968',
        fontSize: 35,
      },
      textEditButton:{
        color:'#0b0968',
        fontSize: 20,
      },
      textPitBar:{
        color:'white',
        marginLeft: 5,
        position:'absolute',
        left:'22.5%',
      },
      textNameBar:{
        color:'white',
        position:'absolute',
        right:'27%',
      },
      textInput:{
        textAlign: 'center',
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: 'white',
        width: '20%',
        position:'absolute',
        right:'6%',
      },
      buttonSubmit:{
        width: 90,
        height: 60,
        borderRadius:35,
        backgroundColor:'#0b0968',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        position:"absolute",
        bottom:'9%',
        right:'8%',
        },
})
