import React, {Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions, AsyncStorage, ImageBackground } from 'react-native'
import * as axios from 'axios'

import Header from '../components/Header'


const{width: WIDTH} = Dimensions.get('window') 

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
      }

      _storeData = (token, idUser) => {
        try {
          AsyncStorage.multiSet([['@token', token], ['@idUser', idUser]])
        } catch (error) {
         console.error(error);
        }
      }

      _login = () => {
        const link = ' https://mybuild-api.herokuapp.com/api/authenticate/signin';
        const user = {
            "username": this.state.username,
            "password": this.state.password,
          };
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        axios.post(link, user, axiosConfig)
        .then((response) => {
            this._storeData(response.data.data.meta.token, response.data.data.user.id.toString());
            this.props.navigation.navigate('ChampionsListPage')
        })
        .catch((error) => {
            console.log(error);
        });
      }

    render(){
    return (
        <ImageBackground source={require('../../assets/login.jpg')} style={{width: '100%', height: '100%',flex:1, flexDirection:'row'}}>
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <TextInput
                placeholder="Nom d'utilisateur"
                style={styles.input}
                onChangeText={(username) => {this.setState({username})}}
                value={this.state.username}>
            </TextInput>
            <TextInput
                placeholder="Mot de passe"
                style = {styles.input}
                secureTextEntry={true}
                onChangeText={(password) => {this.setState({password})}}
                value={this.state.password}>
            </TextInput>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this._login}
                >
                <Text style={styles.buttonTextLogin}>Connexion</Text>
            </TouchableOpacity>
            <Text style={{color: 'rgba(255,255,255,0.7)'}}>Vous n'avez pas de compte ? Cliquez ici: </Text>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={styles.signUpText}>S'inscrire</Text>
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
        marginBottom: 30,
    },
    buttonContainer: {
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    buttonTextLogin: {
        fontSize: 20,
        color: '#67d0d3',
        paddingHorizontal: 20,
    },
    signUpText: {
        color: '#67d0d3',
    },
    input: {
        width: WIDTH -55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor:'rgba(0,0,0,0.35)',
        color:'rgba(255,255,255,0.7)',
        marginHorizontal: 25,
        marginBottom: 20,
    }
})

export default Login