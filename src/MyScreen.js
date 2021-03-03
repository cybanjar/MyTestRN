import React, { Component } from 'react';
import { View, Text, Dialog, Card, Button } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native'


const MyScreen = () => {
    return (
            <View style={styles.defaultMargin} flex padding-page>
                <Text heading marginB-s4>My Screen</Text>
                <Card height={100} center padding-card marginB-s4>
                    <Text body>This is an example card </Text>
                </Card>

                <Button label="Save" body bg-primaryColor square></Button>
            </View>
        )
    
}

export default MyScreen

const styles = StyleSheet.create({
    defaultMargin: {
        marginHorizontal: 20
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
