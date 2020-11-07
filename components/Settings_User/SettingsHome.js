import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';


import Cli from './Settings_cli';
import Emp from './Setting_emp'

import HomeB from './Home.jpg';
import settings from './settings.jpg';

export default class Home extends React.Component{

    constructor(){
        super();
        this.state={
            screen:1,
        }
    }
    
    handleScreen = (s) =>{
        console.log(this.state.screen)
        this.props.stage(s)
    }
    
    render(){
        const {coe} = this.props;
        console.log(coe);
             let stage;
             switch (coe) {
               case 1:
               stage = <Cli
                stage = {this.handleScreen}
               />
               break;
               case 2:
               stage = <Emp
               stage = {this.handleScreen}
               />
               break;
             }
        return(
        <View  style = {styles.container}>
            {stage}
        </View>
    );
}

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'column',
        alignContent: 'center',

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
        height:50,
        width:50,
    },
    bar:{
        height:'15%',
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: 'black',
        position:"absolute",
        bottom:'-20%',
    },
})
