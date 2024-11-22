import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import options from '../../assets/options.png';

export default function MusicPlaylist(props) {
    const navigation = useNavigation();
    console.log("props cover",props.cover)
    return (
        <Pressable onPress={() => navigation.navigate('Player', 
            {
                        imagem : props.cover,
                        title : props.title,
                        artist : props.artist,
                        idPlaylist : props.idPlaylist,
                        isPlaylistMundial : props.isPlaylistMundial,
                        idMusica : props.idMusica,
                        back : props.back
            }
        )}>
        <View style={styles.list}>
            <Image style={styles.capa} source={{uri : props.cover}} />
            <View style={styles.musicInfo}>
                <Text style={styles.musicTitle}>{props.title}</Text>
                <Text style={styles.artist}>{props.artist}</Text>
            </View>
            <Pressable style={styles.options} onPress={(event) => {
                event.stopPropagation(); // Evita que o evento alcance o Pressable externo
                navigation.navigate('Menu', 
                    {
                        imagem : props.cover,
                        title : props.title,
                        artist : props.artist,
                        idPlaylist : props.idPlaylist,
                        isPlaylistMundial : props.isPlaylistMundial,
                        idMusica : props.idMusica
                    }
                );
                // console.log("clicou nos 3 ...")
            }}>
                <Image source={options} />
            </Pressable>
        </View>
    </Pressable>
    
    )
}

const styles = StyleSheet.create({
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

    options: {
        width: 10,
    }
})