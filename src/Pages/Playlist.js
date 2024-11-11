import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import gato from '../../assets/gato.jpg';
import seta from '../../assets/seta-e.png';
import options from '../../assets/options.png';
import slipknot from '../../assets/slipknot.jpg'; // Capa de exemplo

const musicData = [
    { id: '1', title: 'Custer', artist: 'Slipknot', cover: slipknot },
    { id: '2', title: 'Música 2', artist: 'Artista 2', cover: slipknot },
    { id: '3', title: 'Música 3', artist: 'Artista 3', cover: slipknot }, 
    { id: '4', title: 'Música 4', artist: 'Artista 3', cover: slipknot }, 
    // Adicione mais músicas conforme necessário
];

export default function Playlist() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.opcao}>
                <Pressable onPress={() => navigation.navigate('Home')} >
                <Image source={seta} />
                </Pressable>
                <Text style={styles.upTitle}>FROM PLAYLIST</Text>
                <Image source={options} />
            </View>
           
            <View style={styles.titleContainer}>
                <Image style={styles.playlist} source={gato} />
                <Text style={styles.title}>Gym Cat</Text>
                <Text style={styles.tags}> Phonk, Metal, NuMetal </Text>
            </View>

            <View style={styles.musics}>
                <Pressable onPress={() => navigation.navigate('Player')}>
                {musicData.map((music) => (
                    <View key={music.id} style={styles.list}>
                        <Image style={styles.capa} source={music.cover} />
                        <View style={styles.musicInfo}>
                            <Text style={styles.musicTitle}>{music.title}</Text>
                            <Text style={styles.artist}>{music.artist}</Text>
                        </View>
                        
                        <Image source={options} />
                    </View>
                ))}
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },

    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    opcao: {
        flex: 1,
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    upTitle: {
        marginTop: 20,
        fontSize: 20,
        color: 'grey',
        textAlign: 'center',
    },

    playlist: {
        width: 263,
        height: 252,
        borderRadius: 30,
    }, 

    title: {
        fontSize: 30,
        color: 'white'
    },

    tags: {
        fontSize: 13,
        color:'white'
    },
    
    musics: {
        flexDirection: 'column',
        margin: 30,
    },

    list: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    
    capa: {
        width: 53,
        height: 52,
        borderRadius: 30,
        marginRight: 10, // Espaçamento à direita da capa
    },

    musicInfo: {
        flex: 1, // Permite que as informações ocupem o espaço restante
    },

    musicTitle: {
        color: 'white',
        fontSize: 16,
    },

    artist: {
        fontSize: 12,
        color: 'grey',
    },
});