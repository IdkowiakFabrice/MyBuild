import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { block } from 'react-native-reanimated'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style= {styles.headerText}>MyBuild                                        </Text>
                <Text style= {styles.headerText}>                                           Profil</Text>

            </View>
        )
    }
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
    }
})
