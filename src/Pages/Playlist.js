import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import gato from "../../assets/gato.jpg";
import seta from "../../assets/seta-e.png";
import options from "../../assets/options.png";
import slipknot from "../../assets/slipknot.jpg"; // Capa de exemplo
import MusicPlaylist from "../Components/MusicPlaylist";
import axios from "axios";

// const musicData = [
//     { id: '1', title: 'Custer', artist: 'Slipknot', cover: slipknot },
//     { id: '2', title: 'Música 2', artist: 'Artista 2', cover: slipknot },
//     { id: '3', title: 'Música 3', artist: 'Artista 3', cover: slipknot },
//     { id: '4', title: 'Música 4', artist: 'Artista 3', cover: slipknot },
// Adicione mais músicas conforme necessário
// ];

export default function Playlist({ route, navigation }) {
  const navigationLink = useNavigation();

  const { idPlaylist } = route.params;
  const { isPlaylistMundial } = route.params;



  const [imagePlaylist, setImagePlaylist] = useState("");
  const [titlePlaylist, setTitlePlaylist] = useState("");
  const [descPlaylist, setDescPlaylist] = useState("");

  const [musicas, setMusicas] = useState([]);

  const getPlaylist = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      var uri = "";
      var headers = {};
      
      if (isPlaylistMundial) {
        uri = `http://192.168.15.8:7050/playlistmundial/${idPlaylist}`;
        playlistType = "PlaylistMundial";
      } else {
        uri = `http://192.168.15.8:7050/playlist/${idPlaylist}`;
        headers = { Authorization: token };
        
      }
      console.log("------------------------------------------------------");
      console.log("is ?", headers);
      console.log("------------------------------------------------------");
      console.log("idPlaylist", idPlaylist);
      console.log("token", token);
      const response = await axios.get(uri, {headers : headers});

      if (isPlaylistMundial) {
        const playlist = response.data.PlaylistMundial;
        console.log(playlist);
        setImagePlaylist(playlist.imagem);
        setTitlePlaylist(playlist.nomePlaylist);
        setDescPlaylist(playlist.descricao);
      }else {
        const playlist = response.data.playlist;
        setImagePlaylist(playlist.imagem);
        setTitlePlaylist(playlist.nomePlaylist);
        setDescPlaylist(playlist.descricao);
      }
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

  const getMusics = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      var uri = "";
      var headers = {};

      if(isPlaylistMundial){
        uri =  `http://192.168.15.8:7050/playlistmundialmusica/getbyplaylist/${idPlaylist}`
      }else {
        uri = `http://192.168.15.8:7050/playmusic/getbyplaylist/${idPlaylist}`
        headers = { Authorization: token };

      }

      // console.log(idPlaylist);
      const response = await axios.get(
        uri,
        { headers: headers }
      );

      if(isPlaylistMundial){
        const musicas = response.data.musicasPlaylistMundial;
        setMusicas(musicas);
      }else {
        const musicas = response.data.playMusic;
        setMusicas(musicas);
      }

    } catch (error) {
      // Tratando os erros
      if (error.response) {
        console.log("data", error.response.data.msg);
        // Adicionando a mensagem de erro na tela
        // createTwoButtonAlert(error.response.data.msg);
        console.error(error.response.status);
        // if(error.response.status === 401){navigationLink.navigate('Login')}
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
    getMusics();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.opcao}>
        <Pressable onPress={() => navigationLink.navigate("Home")}>
          <Image source={seta} />
        </Pressable>
        <Text style={styles.upTitle}>FROM PLAYLIST</Text>
        <Image source={options} />
      </View>

      <View style={styles.titleContainer}>
        <Image style={styles.playlist} src={imagePlaylist} />
        <Text style={styles.title}>{titlePlaylist}</Text>
        <Text style={styles.tags}> {descPlaylist}</Text>
      </View>

      <View style={styles.musics}>
        {musicas.map(
          async (element, index) => (
            console.log(element),
            console.log("element do map", element.musica.artista),
            (
              <MusicPlaylist
                title={element.musica.nomeMusica}
                artist={element.musica.artista}
                cover={element.musica.imagemMusica}
                idPlaylist={idPlaylist}
                isPlaylistMundial={isPlaylistMundial}
                idMusica={element.musica._id}
                back={'Playlist'}
              />
            )
          )
        )}
        {/* <MusicPlaylist
          title={"Custer"}
          artist={"Slipknot"}
          cover={
            "https://m.media-amazon.com/images/I/81uUbACgxQL._UF894,1000_QL80_.jpg"
          }
        /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  opcao: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  upTitle: {
    marginTop: 20,
    fontSize: 20,
    color: "grey",
    textAlign: "center",
  },

  playlist: {
    width: 263,
    height: 252,
    borderRadius: 30,
  },

  title: {
    fontSize: 30,
    color: "white",
  },

  tags: {
    fontSize: 13,
    color: "white",
  },

  musics: {
    flexDirection: "column",
    margin: 30,
  },

  list: {
    flexDirection: "row",
    alignItems: "center",
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
    color: "white",
    fontSize: 16,
  },

  artist: {
    fontSize: 12,
    color: "grey",
  },
});
