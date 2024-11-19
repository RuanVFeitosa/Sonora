import React from 'react'
import { Image, Button, Text, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import image from '../../assets/img_girl.png'


export default function Welcome() {
    const navigation = useNavigation();

    return (
        <>
            <Image style={ styles.image } source={ image} />
            <View style={styles.container}>
                <Text style={styles.text}>From the latest to the greatest hits, play your favorite tracks onmusium now!</Text>
                <Button style={styles.button} title="Get Started" onPress={() => navigation.navigate('Sign')}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 500, 
        padding: 50,
        top: 400,
        flex: 2,
        zIndex: 3,
        borderRadius: 20,
        backgroundColor: 'black',
        position: "absolute"
    },

    text: {
        padding: 50,
        fontSize: 20,
        color: 'white'
    },

    button: {
        color: 'black',
    },

    image: {
        height: 500,
    }

})
