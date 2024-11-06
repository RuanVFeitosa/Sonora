import React from 'react'
import { Button, Text, View, StyleSheet, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../assets/Logo-sf.png'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import apple from '../../assets/apple.png'

export default function Sign(props) {
    const navigation = useNavigation();
    const { title = 'Save' } = props;
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.image} source={Logo} />
                <Text style={styles.title}>Let's get you in</Text>

                <View style={styles.sites}>
                    <Text style={styles.options}>
                        <Image source={google} />
                        Continue with Google
                    </Text>
                    <Text style={styles.options}>
                        <Image source={facebook} />
                        Continue with Google
                    </Text>
                    <Text style={styles.options}>
                        <Image source={apple} />
                        Continue with Google
                    </Text>

                </View>

                <View style={styles.containerLine}>
                    <View style={styles.line} />
                    <Text style={styles.textLine}>or</Text>
                    <View style={styles.line} />
                </View>

                <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textButton}>{title}</Text>
                </Pressable>

                <View>
                    <Text style={styles.account}>Have an account? 
                        <Pressable style={styles.signUpButton} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textSignUp}>Login</Text>
                    </Pressable> </Text>
                </View>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        // justifyContent:'center',
        alignItems: 'center',
        flex: 3,
        backgroundColor: '#000000',

    },

    image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 370,
        height: 300,
    },

    title: {
        fontSize: 30,
        color: 'white'
    },

    sites: {
        flex: 0.9,
        justifyContent: 'space-between',
        margin: 10,
    },

    options: {
        padding: 20,
        width: 400,
        height: 90,
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#1E1E1E',
        borderRadius: 50,
        color: 'white',
    },

    // ----------------------------------------------- Or -----------------------------------------------
    containerLine: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#fff',
    },

    textLine: {
        marginHorizontal: 10,
        color: '#fff',
        fontWeight: 'bold',
    },

    // ----------------------------------------------- Button -----------------------------------------------

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
    },

    textButton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },

    // ----------------------------------------------- Account  -----------------------------------------------
    account: {
        margin: 10,
        alignItems: 'center',
        color: 'white'
    },

    textSignUp: {
        marginLeft: 10,
        color: 'white',
    }
})
