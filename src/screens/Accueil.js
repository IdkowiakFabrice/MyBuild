import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'

import Header from '../components/Header'

// Image zed: https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmJpYwAhSeYLUMj-MvGsr1JTf5Hzh4KOVfnOfvhxVPtJ13AhFo&usqp=CAU
// image theme lol : https://theme.zdassets.com/theme_assets/43400/87a1ef48e43b8cf114017e3ad51b801951b20fcf.jpg
export default class Accueil extends Component {
    render() {
        return (
            <ImageBackground source={require('../../assets/accueil.jpg')} style={{width: '100%', height: '100%',flex:1}}>
            <View>
                    <TouchableOpacity
                        style={styles.buttonLoginContainer}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.signInText}>Se connecter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonRegisterContainer}
                        onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={styles.signUpText}>S'inscrire</Text>
                    </TouchableOpacity>                
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    buttonLoginContainer :{
    backgroundColor: '#010a13',
    borderRadius: 5,
    padding: 10,
    marginBottom:2,
    marginTop: '130%',
    margin: 20,
    borderWidth:1,
    borderColor: '#bf8d3a',
    },
    buttonRegisterContainer :{
        backgroundColor: '#010a13',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        borderWidth:1,
        borderColor: '#bf8d3a',
        },
    signInText:{
        color:'#bf8d3a',
        fontSize:20,
        textAlign:'center'
    },
    signUpText: {
        color:'#bf8d3a',
        fontSize:20,
        textAlign:'center'
    }
  });
  