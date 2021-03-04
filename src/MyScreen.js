import React, { Component, useState } from 'react';
import { TextField, View, Image, Text, Colors, Dialog, Card, Button } from 'react-native-ui-lib';
import { StyleSheet, Alert} from 'react-native'
// import Favorite from "./assets/icons/mdi_favorite.png";

const onPressTitle = () => {
    console.log("title pressed");
};

const MyScreen = () => {
    const name = useState("Sarah");
    const locate = useState("Brebes");

    return (
            <View style={styles.defaultMarginH} bgDark-2 flex padding-page>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextField hideUnderline style={styles.searching} placeholder="Searching..."/>
                    <Image style={styles.favorite} source={require('./assets/icons/mdi_favorite.png')} />
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <View>
                        <Image style={styles.photoProfile} source={{ uri: 'http://placeimg.com/45/45/people' }}/>
                    </View>
                    
                    <View>
                        <Text style={styles.nameProfile} onPress={onPressTitle}>
                            {name}
                        </Text> 
                        <Text dark50 style={styles.fontBody}>
                            {locate}
                        </Text> 
                    </View>
                </View>
                
                <View>
                    <Card padding-card marginB-s4>
                        <Image cover borderRadius={8} source={{ uri: 'http://placeimg.com/500/500/people' }} />
                        <View margin-16 style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.fontTitle}>Anggur</Text>
                            <Text dark50 style={styles.fontTitle}>Rp. 250.000</Text>
                        </View>
                    </Card>
                </View>

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
        marginBottom: 8,
        marginRight: 16,
        borderWidth: 1,
        borderColor: '#5848FF',
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
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: '#5848ff',
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 8,
        width: 340
    },
    
    nameProfile: {
        fontSize: 20,
        fontWeight: "bold"
    },

    fontTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    fontBody: {
        fontSize: 14,
    },

    colorPrimary: {
        color: '#5848FF'
    },

    favorite: {
        marginTop: 32,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

})
