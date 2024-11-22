import React, { useEffect, useState } from 'react';
import Slider from '@react-native-community/slider';
import { Text, View, StyleSheet, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import seta from '../../assets/seta-e.png';
import options from '../../assets/options.png';
import slipknot from '../../assets/slipknot.jpg';

import note from '../../assets/music-note-2.png'
import remove from '../../assets/remove.png'
import queue from '../../assets/hamburger-menu.png'
import tags from '../../assets/tag.png'
import artist from '../../assets/artist.png'
import album from '../../assets/disc.png'
import credits from '../../assets/user-information.png'
import download from '../../assets/download.png'
import share from '../../assets/share.png'
import code from '../../assets/music-note-2.png'


export default function Menu({ route }) {

    const {imagem, title, artist, idPlaylist, isPlaylistMundial, idMusica} = route.params;
    

    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.opcao}>
                <Pressable onPress={() => navigation.navigate('Playlist', 
                    {
                        idPlaylist : idPlaylist,
                        isPlaylistMundial : isPlaylistMundial
                    }
                    )} >
                    <Image source={seta} />
                </Pressable>
            </View>

            <View style={styles.titleContainer}>
                <Image style={styles.playlist} source={{uri : imagem}} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.artist}>{artist}</Text>
            </View>

            <View style={styles.options}>

                <Pressable onPress={() => navigation.navigate('Library', 
                    {
                        idMusica : idMusica,
                        nomeMusica : title
                    }
                )}>
                <Text style={styles.menuOptions}>
                    <Image source={note} />
                    Add to Playlist</Text>
                </Pressable>
                


                <Text style={styles.menuOptions}>
                    <Image source={remove} />
                    Remove from Playlist</Text>
                <Text style={styles.menuOptions}>
                    <Image source={queue} />
                    Add to queue</Text>
                <Text style={styles.menuOptions}>
                    <Image source={tags} />
                    Modify tags</Text>
                <Text style={styles.menuOptions}>
                    <Image source={artist} />
                    View Artist</Text>
                <Text style={styles.menuOptions}>
                    <Image source={album} />
                    View Album</Text>
                <Text style={styles.menuOptions}>
                    <Image source={credits} />
                    Show Credits</Text>
                <Text style={styles.menuOptions}>
                    <Image source={download} />
                    Download</Text>
                <Text style={styles.menuOptions}>
                    <Image source={share} />
                    Share</Text>
                <Text style={styles.menuOptions}>
                    <Image source={code} />
                    Generate QR Code</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    opcao: {
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
        fontSize: 24,
        color: 'white'
    },

    tags: {
        fontSize: 13,
        color: 'white'
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
        marginRight: 10,
    },

    musicInfo: {
        flex: 1,
    },

    musicTitle: {
        color: 'white',
        fontSize: 16,
    },

    artist: {
        fontSize: 13,
        color: 'grey',
    },

    options: {
        flexDirection: 'column',
        alignSelf: 'center',

    },

    menuOptions: {
        color: 'white',
        padding: 20,
        
    }
});
