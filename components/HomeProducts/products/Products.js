import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import shoe from './shoe.jpg' ;

export default class Home extends React.Component{

constructor(){
    super();
    this.state={

    }
}


render(){
    const {name} = this.props;
    const {img} = this.props;
    const {see} = this.props
    return(
        <TouchableOpacity style = {styles.container} onPress ={()=>see(7,name,img)}>
            <Image  source={img} resizeMode='contain' style={styles.conner}/>
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}


}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignContent: 'center',
        height: 80,
        width:80
    },
    rowContainer:{
        flexDirection: 'row',
        alignContent: 'center',
    },
    conner:{
        width:50,
        height:50
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
