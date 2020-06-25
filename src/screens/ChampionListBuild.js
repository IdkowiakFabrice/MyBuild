import React, { Component } from 'react'
import { Text, View, ScrollView, Image, AsyncStorage, StyleSheet } from 'react-native'
import { CHAMPIONBYID } from '../../ChampionObject'
import Header from '../components/Header'
import { Avatar } from 'react-native-elements'
import * as axios from 'axios'


export default class ChampionListBuild extends Component {
    constructor(props){
        super(props)
    }

    state = {
        token: '',
        idUser: '',
        idChamp:'0',
        imageChamp: '',
        item1: '',
      };

    _retrieveData = async () => {
        try {
            const token = await AsyncStorage.getItem('@token');
            const idUser = await AsyncStorage.getItem('@idUser');
            const idChamp = await AsyncStorage.getItem('@idChamp');
            const imageChamp = await AsyncStorage.getItem('@imageChamp');
            console.log('token:%s', token)
            console.log('userid:%s', idUser)
            console.log('idChamp:%s', idChamp)
            console.log('imageChamp:%s', imageChamp)
            if (idUser !== null) {
              this.setState({ idUser })
            }
            if (token !== null) {
                this.setState({ token })
            }
            if (idChamp !== null) {
                this.setState({ idChamp })
            }
            if (imageChamp !== null) {
                this.setState({ imageChamp })
            }
            //this._getMarker(idUser, token)
            this._jsonListBuild()
        } catch (error) {
            console.error(error);
        }
      };

      _jsonListBuild = async () => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token
          }
        };
        axios.get('https://mybuild-api.herokuapp.com/api/users/' + this.state.idUser + '/build/1', axiosConfig)
        .then((response) => {
          console.log(response.data.data.build.item1)
          this.state.item1 = response.data.data.build.item1
          
        })
        .catch((error) => {
          console.log(error)
        });
      }

    componentDidMount(){
        this._retrieveData()
    }
    render() {
        return (
            <View>
                <Header />
                <ScrollView>
                    <View style={styles.iconChamp}>
                    <Avatar
                        size='large'
                        source={{uri : this.state.imageChamp}}
                    />
                    <Avatar
                        size='large'
                        source={{uri : this.state.item1}}
                    />
                    </View>
                    <Text style={styles.iconText}>{CHAMPIONBYID[this.state.idChamp]['name']}</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconChamp: {
        alignItems: 'center',
        paddingTop:'15%'
    },
    iconText: {
        fontSize: 30, 
        paddingTop:'2%', 
        color:'#bf8d3a',
        alignSelf:'center',
    },

})