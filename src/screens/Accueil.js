import React, { Component } from 'react'
import { Text, ScrollView, View, TouchableOpacity } from 'react-native'
import { Avatar, Image} from 'react-native-elements';
import { CHAMPIONBYID } from '../../ChampionObject'
import * as axios from 'axios'

export default class Accueil extends Component {
    constructor(props) {
        super(props);
      }
    render(){
        return (
            <ScrollView>
                {addImageToChampion(CHAMPIONBYID)}
                {CHAMPIONBYID.map(champion => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, alignSelf: 'center',justifyContent:'space-between' }}>
                    <Text style={{ fontSize: 20, paddingRight: 10, backgroundColor: '#c3c4d1' }}>{champion.name}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Image style={{width:100, height:100}}
                        source={{ uri: champion.image }}
                        />
                    </TouchableOpacity>
                </View>
            ))}
            </ScrollView>
        )
    }
}
function addImageToChampion(CHAMPIONBYID) {
    let i = 0
    CHAMPIONBYID = CHAMPIONBYID.map(function(champion){
       champion.image = `http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champion['name']}.png`
       console.log(champion.image)
       i ++
       return champion
    })
}