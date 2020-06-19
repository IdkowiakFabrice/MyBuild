import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style= {styles.headerText}> HEADERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        padding: 25,
    },
    headerText: {
        color: 'orange',
    }
})
