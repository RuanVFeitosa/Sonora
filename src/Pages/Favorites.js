import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text, View, StyleSheet, Image, FlatList, StatusBar, SafeAreaView, SectionList, ScrollView, Pressable } from 'react-native';
import seta from '../../assets/seta-e.png';
import options from '../../assets/options.png';
import slipknot from '../../assets/slipknot.jpg'; // Capa de exemplo
import gato from '../../assets/gato.jpg';
import MusicPlaylist from '../Components/MusicPlaylist';

const musicData = [
  { id: '1', title: 'Custer', artist: 'Slipknot', cover: slipknot },
  { id: '2', title: 'Música 2', artist: 'Artista 2', cover: slipknot },
  { id: '3', title: 'Música 3', artist: 'Artista 3', cover: slipknot },
  { id: '4', title: 'Música 4', artist: 'Artista 3', cover: slipknot },
  // Adicione mais músicas conforme necessário
];

export default function Favorites() {
  const navigation = useNavigation();


  return (
    <ScrollView style={styles.container}>
      <View style={styles.opcao}>
        <Pressable onPress={() => navigation.navigate('Profile')} >
          <Image source={seta} />
        </Pressable>
        <Text style={styles.upTitle}>Favorites</Text>
      </View>
      <View style={styles.containerLine}>
        <View style={styles.line} />
        <Text style={styles.textLine}>20 liked songs</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.musics}>
        <MusicPlaylist title={'Custer'} artist={'Slipknot'} cover={'https://m.media-amazon.com/images/I/81uUbACgxQL._UF894,1000_QL80_.jpg'} />
        <MusicPlaylist title={'Custer'} artist={'Slipknot'} cover={'https://m.media-amazon.com/images/I/81uUbACgxQL._UF894,1000_QL80_.jpg'} />
        <MusicPlaylist title={'Custer'} artist={'Slipknot'} cover={'https://m.media-amazon.com/images/I/81uUbACgxQL._UF894,1000_QL80_.jpg'} />
        <MusicPlaylist title={'Custer'} artist={'Slipknot'} cover={'https://m.media-amazon.com/images/I/81uUbACgxQL._UF894,1000_QL80_.jpg'} />
        <MusicPlaylist title={'Custer'} artist={'Slipknot'} cover={'https://m.media-amazon.com/images/I/81uUbACgxQL._UF894,1000_QL80_.jpg'} />
        <MusicPlaylist title={'Custer'} artist={'Slipknot'} cover={'https://m.media-amazon.com/images/I/81uUbACgxQL._UF894,1000_QL80_.jpg'} />
        <MusicPlaylist title={'Custer'} artist={'Slipknot'} cover={'https://m.media-amazon.com/images/I/81uUbACgxQL._UF894,1000_QL80_.jpg'} />
        <MusicPlaylist title={'Custer'} artist={'Slipknot'} cover={'https://m.media-amazon.com/images/I/81uUbACgxQL._UF894,1000_QL80_.jpg'} />
        <MusicPlaylist title={'Custer'} artist={'Slipknot'} cover={'https://m.media-amazon.com/images/I/81uUbACgxQL._UF894,1000_QL80_.jpg'} />
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
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
    right: 180,
    bottom: 13,
  },

  liked: {
    lineHeight: 20,
    fontSize: 16,
    color: 'white'
  },

  containerInfo: {
    top: 50,
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
