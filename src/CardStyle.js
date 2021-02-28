import React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'

const CardStyle = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/team/livy.jpg')} style={styles.photoStyle} />
            <Text style={styles.textTitle}>Sarah Adiva</Text>
            <Text style={styles.textBody}>Jakarta</Text>
            <Button 
                title='Chat' 
                style={styles.buttonStyle} 
                onPress={() => ok()}
            /> 
               
        </View>
    )
}

export default CardStyle

const ok = () => {
    Alert.alert('Successfully!')
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 20,
        width: 158,
        height: 270,
        backgroundColor: '#DBE4EB',
        borderRadius: 8,
    },

    photoStyle: {
        width: 158,
        height: 158,
        borderRadius: 8,
    },

    textTitle: {
        textAlign: 'center',
        fontSize: 18,
        padding: 4
    },

    textBody: {
        textAlign: 'center',
        color: '#A8A8A8'
    },

    buttonStyle: {
        marginVertical: 8,
        backgroundColor: '#0DC7CF',
        borderRadius: 8,
        marginHorizontal: 8,
    },
})
