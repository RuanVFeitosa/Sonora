import React from 'react'
import { Button, Text, View, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../assets/Logo.png'

export default function Sign() {
    return (
        <>
            <View style={ styles.container }>
            <Image style={ styles.image } source={ Logo } />
                <Text>Sign</Text>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        position:'absolute',

    },
    image: {
        position:'absolute',
        width: 400,
        height: 354,
    }

})
