import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Home from './Home';
import Log_In from './Log_In';
import Sign_In from './SignIn/SignIn_Home';
import StartPage from './startpage/StartPage';
import HomeP from './HomeProducts/HomeP';
import View from './HomeProducts/productView';
import Settings from './Settings_User/SettingsHome';

export default class EMO extends React.Component{

constructor(){
    super();
    this.state={
        screen:0,
        coe:1,
        user:'',
        img:'',
        name:''
    }
}

handleScreen = (s) =>{
    console.log(this.state.screen)
    this.setState({screen:s});
}
handleScreen2 = (s,c,u) =>{
    console.log("c es"+c)
    this.setState({screen:s});
    this.setState({coe:c});
    console.log(this.state.coe)
    this.setState({user:u})
}
handleScreen3 = (s,u) =>{
    this.setState({screen:s});
    this.setState({user:u})
    console.log(this.state.coe)
}
handleScreen4 = (s,n,i) =>{
    this.setState({screen:s});
    this.setState({name:n})
    this.setState({img:i})
    console.log('siiii')
}
render(){
    const {screen} = this.state;
         let stage;
         switch (screen) {
           case 1:
           stage = <Home
            stage = {this.handleScreen}
           />
           break;
           case 2:
           stage = <Log_In
           stage = {this.handleScreen3}
           />
           break;
           case 3:
           stage = <Sign_In
           change = {this.handleScreen2}
           />
           break;
           case 4:
           stage = <StartPage
           stage = {this.handleScreen}
           coe = {this.state.coe}
           />
           break;
           case 5:
           stage = <HomeP
           seep = {this.handleScreen4}
           stage = {this.handleScreen}
           />
           break;
           case 6:
           stage = <Settings    
           stage = {this.handleScreen}
           coe = {this.state.coe}
           user = {this.state.user}
           />
           break;
           case 7:
           stage = < View
           stage = {this.handleScreen}
            img ={this.state.img}
            name = {this.state.name}
           />
           break;
           default:
           stage = <Home
           stage = {this.handleScreen}
          />
        }

    return(
        <SafeAreaView  style = {styles.container}>
            {stage}
        </SafeAreaView>
    );
}


}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F4F5EF',
    },
})
