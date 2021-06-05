import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const UseState = (props) => {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View style={styles.container}>
            <Text>Saya {props.name}, sedang {isHungry ? "lapar" : "Puasa"} </Text>

            <Button
                onPress={() => {
                    setIsHungry(false);
                }}
                disabled={!isHungry}
                title={isHungry ? "lapar" : "puasa bro"}
                color="#bf1363"
            />

            <Button
                onPress={() => {
                    setIsHungry(true);
                }}
                style={styles.buttonStyle}
                disabled={isHungry}
                title={isHungry ? "non active" : "reset"}
                color="#2940d3"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginVertical: 20

    },
    buttonStyle: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 16,
        height: 50,
    }
})


const cafe = () => {

    return (
        <>
            <UseState name='ahmad' />
        </>
    );
}

export default cafe;