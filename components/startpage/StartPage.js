import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Cli from './CLipages';
import Emp from './Emp';

export default class StartPage extends React.Component{

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
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',

    },
})
