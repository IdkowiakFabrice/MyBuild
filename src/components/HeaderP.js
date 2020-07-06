import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();

        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.back}
                onPress={() => navigation.goBack() }>
                <Image
                    style={styles.back}
                    source={require('../../assets/back.png')}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lol}
                onPress={() => navigation.navigate('ChampionsListPage')}>
                <Image
                    style={styles.lol}
                    source={require('../../assets/lol.png')}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.disc}
                onPress={() => navigation.navigate('Accueil')}>
                <Image
                    style={styles.disc}
                    source={require('../../assets/dc.png')}
                />
                </TouchableOpacity>
            <Text style= {styles.headerText}></Text>
            </View>
        )
    }

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#010a13',
        padding: 25,
        alignItems: 'flex-start',
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor: '#bf8d3a',
    },
    headerText: {
        color: '#bf8d3a',
    },
    back:{
        flex: 0,
        width: 35,
        height: 35,
        resizeMode: 'contain',
        position: 'absolute',
        left: 0,
        top: 10
    },
    disc:{
        flex: 0,
        width: 35,
        height: 35,
        resizeMode: 'contain',
        position: 'absolute',
        right: 5,
        top: 10
    },
    lol:{
        flex: 0,
        width: 35,
        height: 35,
        resizeMode: 'contain',
        position: 'absolute',
        alignContent : "center",
        top: 10,
        left : '48%'
    },
})