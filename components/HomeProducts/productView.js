import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Product from './products/Products';

import H from './product_img/h.jpg'

import HomeB from './Home.jpg';
import settings from './settings.jpg';

import Sushi from './product_img/sushi.jpg'
import Helao from './product_img/helao.jpg'
import Za from './product_img/zapato.jpg'
import S from './product_img/shampoo.jpg'
import L from './product_img/libretas.jpg'
import Alitas from './product_img/alitas.jpg'
import Taco from './product_img/taco.jpg'
import SSol from './product_img/sol.jpg'
import Crema from './product_img/crema.jpg'
import M from './product_img/maquillaje.jpg'
import P from './product_img/perfume.jpg'
import Mas from './product_img/mascarilla.jpg'
import Det from './product_img/detergente.jpg'
import Jab from './product_img/jabon.jpg'
import Esc from './product_img/escoba.jpg'
import Pa from './product_img/trapos.jpg'
import Deco from './product_img/casa.jpg'
import Jar from './product_img/jardin.jpg'
import Jeans from './product_img/jeans.jpg'
import V from './product_img/vestido.jpg'
import Fal from './product_img/faldas.jpg'
import Depo from './product_img/deportiva.jpg'
import Pla from './product_img/playeras.jpg'
import Fru from './product_img/fruta.jpg'
import Cereal from './product_img/cereal.jpg'
import Que from './product_img/cereal.jpg'
import Le from './product_img/leche.jpg'
import Pan from './product_img/pan.jpg'
import Em from './product_img/embutidos.jpg'
import Pul from './product_img/pulseras.jpg'
import Bor from './product_img/bordado.jpg'
import Tej from './product_img/tejido.jpg'
import Cer from './product_img/ceramica.jpg'
import Vid from './product_img/vidrio.jpg'
export default class Home extends React.Component{

constructor(){
    super();
    this.state={

    }
}


render(){
    const{stage}= this.props
    const{img} = this.props
    const{name} = this.props
    return(
        <View  style = {styles.container}>
            <Image source = {img} style = {styles.image2} />
            <Text>{name}</Text>
            <View style={styles.bar}>
            <TouchableOpacity style = {styles.buttonA} underlayColor='#1e90ff' onPress = {() => stage(5)}>
                <Image  source={HomeB} resizeMode='contain' style={styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} underlayColor='#1e90ff' onPress = {() => stage(6)}>
                <Image  source={settings} resizeMode='contain' style={styles.image}/>
            </TouchableOpacity>
            </View>
        </View>
    );
}


}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
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
        height:500,
        width:500,
    },
    bar:{
        height:'15%',
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: 'black',
        position:"absolute",
        bottom:'0%',
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
