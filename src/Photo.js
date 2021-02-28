import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Photo = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'http://placeimg.com/200/200/people' }} style={styles.photoStyle} />
            <Image source={ require('../assets/team/livy.jpg') } style={styles.photoStyle} />
            
        </View>
    )
}

export default Photo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#0abde3'
    },

    photoStyle: {
        width: 100,
        height: 100,
        borderRadius: 8,
    }
})
