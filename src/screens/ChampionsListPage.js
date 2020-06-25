import React, { Component } from 'react'
import { Text, ScrollView, View, TouchableOpacity, ImageBackground, AsyncStorage } from 'react-native'
import { Image } from 'react-native-elements';
import { CHAMPIONBYID } from '../../ChampionObject'
import * as axios from 'axios'

import Header from '../components/Header'


export default class Accueil extends Component {
    static navigationOptions = {
        headerMode: null
    }
    constructor(props) {
        super(props);
      }
      state = { 
        token: '',
        idUser: '',
      };
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
            //this._getMarker(idUser, token)
    
        } catch (error) {
            console.error(error);
        }
      };

      _storeData = (idChamp, imageChamp) => {
        try {
          AsyncStorage.multiSet([['@idChamp', idChamp], ['@imageChamp', imageChamp]])
          this.props.navigation.navigate('ChampionListBuild')
        } catch (error) {
         console.error(error);
        }
      }
      
      componentDidMount() {
        this._retrieveData();
      }
    render(){
        return (
            <ImageBackground source={require('../../assets/bg.jpg')} style={{width: '100%', height: '100%',flex:1, flexDirection:'row'}}>
            <View>
            <Header />
            <ScrollView>
                {addImageToChampion(CHAMPIONBYID)}
                {CHAMPIONBYID.map(champion => (
                    <View style={{ alignItems: 'center', marginBottom: 10, alignSelf: 'center',justifyContent:'space-between' }}>
                    <Text style={{ fontSize: 20, paddingRight: 10, color:'#bf8d3a'}}>{champion.name}</Text>
                    <TouchableOpacity onPress={() => this._storeData(champion.id, champion.image)}>
                        <Image style={{flexDirection: 'row', width:100, height:100}}
                        source={{ uri: champion.image }}
                        />
                    </TouchableOpacity>
                </View>
            ))}
            </ScrollView>
            </View>
            </ImageBackground>
        )
    }
}
function addImageToChampion(CHAMPIONBYID) {
    let i = 0
    CHAMPIONBYID = CHAMPIONBYID.map(function(champion){
       champion.image = `http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champion['name']}.png`
       i ++
       return champion
    })
}