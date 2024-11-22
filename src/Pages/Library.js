import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList, StatusBar, SafeAreaView, SectionList, ScrollView } from 'react-native';
import CardPlaylist from '../Components/CardPlaylist';

export default function Library() {


  const [playlist, setPlaylist] = useState([]);
  const getPlaylist = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      headers = { Authorization: token };
      const response = await axios.get(`http://192.168.15.8:7050/playlist`, {headers : { Authorization: token }});

      console.log("------------------------------------------------------");
      console.log(response.data);
      setPlaylist(response.data.playlists);
      console.log("------------------------------------------------------");
      console.log("token", token);

      // if (isPlaylistMundial) {
      //   const playlist = response.data.PlaylistMundial;
      //   console.log(playlist);
      //   setImagePlaylist(playlist.imagem);
      //   setTitlePlaylist(playlist.nomePlaylist);
      //   setDescPlaylist(playlist.descricao);
      // }else {
      //   const playlist = response.data.playlist;
      //   setImagePlaylist(playlist.imagem);
      //   setTitlePlaylist(playlist.nomePlaylist);
      //   setDescPlaylist(playlist.descricao);
      // }
    } catch (error) {
      // Tratando os erros
      if (error.response) {
        console.log("data", error.response.data.msg);
        // Adicionando a mensagem de erro na tela
        // createTwoButtonAlert(error.response.data.msg);
        console.error(error.response.status);
        // if (error.response.status === 401) {
        //   navigationLink.navigate("Login");
        // }
        console.error(error.response.headers);
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error("Erroor", error.message);
      }
      console.error(error.config);
    }
  };

  useEffect(() => {
    getPlaylist();
  },[])

  return (
    
    <View style={styles.containerCard}>
          <Text style={styles.cl}>Playlist Sonora</Text>
          <View style={styles.grid}>

            {
              playlist.map((element, index) => (
                console.log("testeasdasdads",element),
                <CardPlaylist image = {element.imagem} pressable = {'Playlist'} idPlaylist = {element._id}/>
              ))
            }
            
  
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    backgroundColor: "#0000",
    justifyContent: "center",
    padding: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap", // Permite quebra de linha
    justifyContent: "space-between", // Espaçamento entre os itens
  },
  cl: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    bottom: 30,
    // marginBottom: 20,
  }
})
