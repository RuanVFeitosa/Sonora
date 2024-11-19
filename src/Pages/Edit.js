import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, FlatList, StatusBar, SafeAreaView, SectionList, Pressable, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

import profile from '../../assets/Taylor.png';
import seta from '../../assets/seta-e.png';
import options from '../../assets/options.png';

import Logo from '../../assets/Logo-sf.png';
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import apple from '../../assets/apple.png'


export default function Edit(props) {
    const navigation = useNavigation();

    const { title = 'Enter' } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <View style={styles.opcao}>
                <Pressable onPress={() => navigation.navigate('Profile')} >
                    <Image style={styles.seta} source={seta} />
                </Pressable>
            </View>
            <View style={styles.container}>
                <Image style={styles.profile} source={profile} />
                

                {/* Formulário de Login */}
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#aaaaaa"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#aaaaaa"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />

                <Pressable style={styles.button} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.textButton}>Edit Profile</Text>
                </Pressable>
            </View>
            
        </>
    )
}

const styles = StyleSheet.create({
    opcao: {
        padding: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#000000'

    },

    // seta: {
    //     poi
    // },

    upTitle: {
        marginTop: 20,
        fontSize: 20,
        color: 'grey',
        textAlign: 'center',
    },

    container: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flex: 3,
        backgroundColor: '#000000',
    },

    profile: {
        width: 104,
        height: 116,
        borderRadius: 50,
        marginRight: 10,
    },

    image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 370,
        height: 300,
    },

    title: {
        fontSize: 30,
        color: 'white',
        marginBottom: 10,
        top: 200,
    },

    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#1E1E1E',
        color: 'white',
        paddingHorizontal: 15,
        borderRadius: 5,
        marginVertical: 10,
        borderWidth: 1,

        borderColor: '#444',
    },

    sites: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    containerInfo: {
        top: 220,
        display: 'flex',
    },

    containerLine: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
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

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        marginVertical: 10,


    },

    textButton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },

    account: {
        alignItems: 'center',
        color: 'white',
        marginTop: 20,
    },

    textSignUp: {
        marginLeft: 10,
        color: 'white',
        fontWeight: 'bold',
    },
});
