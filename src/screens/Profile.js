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
            mail:'',
            idUser:'',
            token : '',
        };
      }

      _retrieveData = async () => {
        try {
            const token = await AsyncStorage.getItem('@token');
            const idUser = await AsyncStorage.getItem('@idUser');
            console.log('token:%s', token)
            console.log('userid:%s', idUser)
            if (idUser !== null) {
              this.setState({ idUser })
            }
            if (token !== null) {
                this.setState({ token })
            }
            this._getProfileData(idUser, token)
    
        } catch (error) {
            console.error(error);
        }
      };

      _getProfileData = (idUser, token) => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
          }
        };
        axios.get("https://mybuild-api.herokuapp.com/api/users/" + idUser, axiosConfig)
        .then((response) => {
            console.log(response.data.data.user)
            let user = response.data.data.user
            this.setState({firstname:user.firstname})
            this.setState({lastname:user.lastname})
            this.setState({username:user.username})
            this.setState({mail:user.mail})
          })
          .catch((error) => {
            console.log(error)
          });
      }
      
    _save = () => {
        const updatedInfo = {
            "lastname": this.state.lastname,
            "username": this.state.username,
            "password": this.state.password,
            "passwordConfirmation": this.state.passwordConfirmation,
            "firstname": this.state.firstname,
            'mail': this.state.mail.toLowerCase()
          };
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token
            }
        };
        if(this.state.password !== '' && this.state.passwordConfirmation !== ''){
        axios.put('https://mybuild-api.herokuapp.com/api/users/' + this.state.idUser, updatedInfo, axiosConfig)
        .then((response) => {
            this.props.navigation.navigate('ChampionsListPage')
        })
        .catch((error) => {
            console.log(error);
        });
    }
    }
    componentDidMount() {
        this._retrieveData();
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
                onChangeText={(mail) => {this.setState({mail})}}
                value={this.state.mail}>
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
                onPress={this._save}
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