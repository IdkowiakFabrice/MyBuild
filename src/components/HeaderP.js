import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();

        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.touch}
                onPress={() => navigation.navigate('ChampionsListPage')}>
                <Image
                    style={styles.touch}
                    source={require('../../assets/back.png')}
                />
            </TouchableOpacity>
            <Text style= {styles.headerText}>MyBuild</Text>
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
    touch:{
        flex: 0,
        width: 35,
        height: 35,
        resizeMode: 'contain',
        position: 'absolute',
        right: 0,
        top: 15
    },
})