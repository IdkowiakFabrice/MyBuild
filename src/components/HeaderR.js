import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Header() {

        return (
            <View style={styles.header}>
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
})