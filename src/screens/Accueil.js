import React, { Component } from 'react'
import { Text, ScrollView, View, Avatar } from 'react-native'
import {CHAMPIONBYID} from '../../ChampionObject'
import * as axios from 'axios'

export default function Accueil () {
    function addImageToChampion(CHAMPIONBYID) {
        let i = 0
        CHAMPIONBYID = CHAMPIONBYID.map(function(champion){
           champion.image = `http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champion['name']}.png`
           console.log(champion.image)
           i ++
           return champion
        })
    }
        return (
            <ScrollView>
                {addImageToChampion(CHAMPIONBYID)}
                {CHAMPIONBYID.map(champion => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, alignSelf: 'center',justifyContent:'space-between' }}>
                    <Text style={{ fontSize: 20, paddingRight: 10, backgroundColor: '#c3c4d1' }}>{champion.name}</Text>
                    <Avatar
                        size= 'large'
                        source={{ uri: champion.image }}
                        activeOpacity={0.7}
                    />
                </View>
            ))}
            </ScrollView>
        )
}
