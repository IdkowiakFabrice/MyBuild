import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions, AsyncStorage, ImageBackground, Image  } from 'react-native'
import * as axios from 'axios'

import Header from '../components/Header'

const{width: WIDTH} = Dimensions.get('window') 
class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstname:'',
            lastname:'',
            passwordConfirmation:'',
            email:''
        };
      }

      _storeData = (token, uuid) => {
        try {
          AsyncStorage.multiSet([['@token', token], ['@uuid', uuid]])
        } catch (error) {
         console.error(error);
        }
      }
      
    _signin = () => {
        const link = 'https://mybuild-api.herokuapp.com/api/users/{uuid}';
        const newInfo = {
            "lastname": this.state.lastname,
            "username": this.state.username,
            "password": this.state.password,
            "passwordConfirmation": this.state.passwordConfirmation,
            "firstname": this.state.firstname,
            'mail': this.state.email.toLowerCase()

          };
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
    
    render(){
    return (
        <ImageBackground source={require('../../assets/profile.jpg')} style={{width: '100%', height: '100%',flex:1, flexDirection:'row'}}>
        <View style={styles.container}>
        <TouchableOpacity style={styles.touch}
                onPress={() => this.props.navigation.navigate('ChampionsListPage')}>
        <Image
        style={styles.tinyLogo}
        source={require('../../assets/back.png')}
      />
      </TouchableOpacity>
            <Text style={styles.text}>Profil</Text>
            <TextInput
                placeholder="Nom"
                style={styles.input}
                onChangeText={(lastname) => {this.setState({lastname})}}
                value={this.state.lastname}>
            </TextInput>
            <TextInput
                placeholder="Prenom"
                style={styles.input}
                onChangeText={(firstname) => {this.setState({firstname})}}
                value={this.state.firstname}>
            </TextInput>
            <TextInput
                placeholder="Nom d'utilisateur"
                style={styles.input}
                onChangeText={(username) => {this.setState({username})}}
                value={this.state.username}>
            </TextInput>
            <TextInput
                placeholder="Adresse mail"
                style={styles.input}
                onChangeText={(email) => {this.setState({email})}}
                value={this.state.email}>
            </TextInput>
            <TextInput
                placeholder="Mot de passe"
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(password) => {this.setState({password})}}
                value={this.state.password}>
            </TextInput>
            <TextInput
                placeholder="Confirmation du mot de passe"
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(passwordConfirmation) => {this.setState({passwordConfirmation})}}
                value={this.state.passwordConfirmation}>
            </TextInput>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this._signin}
                >
                <Text style={styles.buttonTextSave}>Sauvegarder</Text>
            </TouchableOpacity>
            
            
            
        </View>
        </ImageBackground>
    )
}
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    touch:{
        flex: 0,
        width: 80,
        height: 80,
        resizeMode: 'contain',
        position: 'absolute',
        left: 0,
        top: 12
    },
    tinyLogo:{
        flex: 0,
        width: 80,
        height: 80,
        resizeMode: 'contain',
        position: 'absolute',
        left: 0,
        top: 12
    },
    text: {
        color: 'rgba(255,255,255,1)',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom:30,
    },
    buttonContainer: {
        backgroundColor: 'rgba(20,20,20,1)',
        borderRadius: 5,
        
        margin: 20
    },
    buttonTextSave: {
        fontSize: 20,
        color: '#FF00FF',
        paddingHorizontal: 20,
        borderWidth:1,
        borderColor: '#FF00FF',
        borderRadius: 5,
        padding: 10,
    },
    signInText: {
        color: '#d8131a',
    },
    input: {
        width: WIDTH -55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor:'rgba(95,95,95,0.7)',
        color:'rgba(255,255,255,1)',
        marginHorizontal: 25,
        marginBottom: 20,
    }
})

export default Profile