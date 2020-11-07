import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Sign_In from './Sign_In';
import Sign_In_Cli from './Sing_In_cli';
import Sign_In_Emp from './Sign_In_Emp'

export default class EMO extends React.Component{

    constructor(){
        super();
        this.state={
            screen:0,
            s:3,
            coe:0,
        }
    }
    
    handleScreen = (s) =>{
        this.setState({screen:s});
        console.log(s)
    }
    handleS = (s,c) =>{
console.log("stage"+c)
        this.props.change(s,c)
    }
    
    

    render(){
        const {screen} = this.state;
        const {change} = this.props
             let stage;
             switch (screen) {
               case 1:
               stage = <Sign_In
                stage = {this.handleScreen}
               />
               break;
               case 2:
               stage = <Sign_In_Cli
               stage = {this.handleS}
               />
               break;
               case 3:
               stage = <Sign_In_Emp
               stage = {this.handleS}
               />
               break;
               default:
               stage = <Sign_In
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
        flex:1,
        backgroundColor: '#F4F5EF',
    },
})
