import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TestStyle() {
    return (
        <View>
            <Text style={styles.textTitle}>Text Style React Native</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textBold: {
        fontWeight: 'bold'
    },

    textBig: {
        fontSize: 28
    },

    textCenter: {
        textAlign: 'center'
    },

    textTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center'
    }
})
