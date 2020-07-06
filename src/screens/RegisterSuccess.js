import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions, AsyncStorage, ImageBackground  } from 'react-native'

import Header from '../components/HeaderR'


const{width: WIDTH} = Dimensions.get('window')
class RegisterSuccess extends Component{
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          token: '',
          userId: 0
        };
      }


    _retrieveData = async () => {
        try {
            const token = await AsyncStorage.getItem('@token');
            const username = await AsyncStorage.getItem('@username');
            if (username !== null) {
              this.setState({ username })
            }
            if (token !== null) {
                this.setState({ token })
            }
        } catch (error) {
            console.error(error);
        }
      };

      componentDidMount = () => {
        this._retrieveData();
      }

    render() {
        return(
            <ImageBackground source={require('../../assets/accueil.jpg')} style={{width: '100%', height: '100%',flex:1}}>
            <View  style={{width: '100%'}}>
                <Header />
                <View style = {styles.container}>
                <Text style = {styles.text}>Inscription réussie!</Text>
                <Text style = {styles.uText}>Bienvenue: { this.state.username }</Text>
                <TouchableOpacity
                    style={styles.buttonReturnContainer}
                    onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Retour</Text>
                </TouchableOpacity>
            </View>
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
        color: '#bf8d3a',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom:30,
        marginTop:'5%'
    },
    buttonContainer: {
        backgroundColor: '#bf8d3a',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    uText: {
        color: '#bf8d3a',
        marginTop: '80%',

    },
    buttonText: {
        color: '#bf8d3a',

    },
    input: {
        width: WIDTH -55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor:'rgba(0,0,0,0.35)',
        color:'#bf8d3a',
        marginHorizontal: 25,
        marginBottom: 20,
    },
    buttonReturnContainer :{
        backgroundColor: '#010a13',
        color:'#bf8d3a',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        borderWidth:1,
        borderColor: '#bf8d3a',
        }
})

export default RegisterSuccess