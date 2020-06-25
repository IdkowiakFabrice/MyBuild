import React, { Component } from 'react'
import { Text, View, Picker } from 'react-native'

export default class ArbreJaune extends Component {
    render() {
        return (
            <View>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>     
            </View>
        )
    }
}
