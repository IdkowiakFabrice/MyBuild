import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions, AsyncStorage, ImageBackground  } from 'react-native'
import * as axios from 'axios'

import Header from '../components/Header'

const{width: WIDTH} = Dimensions.get('window') 
class Register extends Component{
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

      _storeData = (token, username) => {
        try {
          AsyncStorage.multiSet([['@token', token], ['@username', username]])
        } catch (error) {
         console.error(error);
        }
      }
    
    _signin = () => {
        const link = ' https://mybuild-api.herokuapp.com/api/authenticate/signup';
        const newUser = {
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
        axios.post(link, newUser, axiosConfig)
        .then((response) => {
            this._storeData(response.data.data.meta.token, response.data.data.user.username);
            this.props.navigation.navigate('RegisterSuccess')
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    render(){
    return (
        <ImageBackground source={require('../../assets/register.jpg')} style={{width: '100%', height: '100%',flex:1, flexDirection:'row'}}>
        <View style={styles.container}>
            <Text style={styles.text}>S'inscrire</Text>
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
                <Text style={styles.buttonTextLogin}>S'inscrire</Text>
            </TouchableOpacity>
            <Text style={{color: 'rgba(255,255,255,0.7)'}}>Vous possedez déjà un compte ? Cliquez ici: </Text>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.signInText}>Se connecter</Text>
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
    text: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom:30,
    },
    buttonContainer: {
        backgroundColor: 'rgba(20,20,20,1)',
        borderRadius: 5,
        
        margin: 20
    },
    buttonTextLogin: {
        fontSize: 20,
        color: '#d8131a',
        paddingHorizontal: 20,
        borderWidth:1,
        borderColor: '#d8131a',
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
        backgroundColor:'rgba(95,95,95,0.3)',
        color:'rgba(255,255,255,1)',
        marginHorizontal: 25,
        marginBottom: 20,
    }
})

export default Register