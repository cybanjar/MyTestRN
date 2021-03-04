import React, { Component } from 'react';
import { TextField, View, Image, Text, Colors, Dialog, Card, Button } from 'react-native-ui-lib';
import { StyleSheet, Alert} from 'react-native'

const MyScreen = () => {
    return (
            <View style={styles.defaultMarginH} bgDark-2 flex padding-page>

                <TextField style={styles.searching} placeholder="Searching..."/>

                <Image style={styles.photoProfile} source={{ uri: 'http://placeimg.com/50/50/people' }}/>
                <Card  center padding-card marginB-s4>
                    <Image cover borderRadius={8} source={{ uri: 'http://placeimg.com/500/500/people' }} />
                    <Text style={styles.defaultMarginV} body>This is an example card </Text>
                </Card>

                <Button onPress={() => onSave()} label="Save" body bg-primaryColor square></Button>
            </View>
        )
    
}

export default MyScreen

const onSave = () => {
    Alert.alert('Successfully!')
}

const styles = StyleSheet.create({
    photoProfile: {
        width:50,
        height: 50,
        borderRadius: 50,
        marginBottom: 6
    },
    
    defaultMarginH: {
        marginHorizontal: 20,
    },

    defaultMarginV: {
        marginVertical: 16
    },
        
    searching: {
        borderStyle: 'solid',
        marginTop: 20,
    },
    
    container: {
        marginVertical: 20,
        marginHorizontal: 20,
        width: 158,
        height: 270,
        backgroundColor: '#DBE4EB',
        borderRadius: 8,
    },

})
