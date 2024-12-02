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
// require('dotenv').config();
import { URL } from "@env";

import gato from "../../assets/gato.jpg";
import seta from "../../assets/seta-e.png";
import options from "../../assets/options.png";
import slipknot from "../../assets/slipknot.jpg"; // Capa de exemplo
import MusicPlaylist from "../Components/MusicPlaylist";
import axios from "axios";
import Loading from "../Components/Loading";

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

  const [loading, setLoading] = useState(false);

  const getPlaylist = async () => {
    try {
      // Pegando o token do storage
      const token = await AsyncStorage.getItem("token");

      // Criando variaveis para manipular
      var uri = "";
      var headers = {};

      // Validando o tipo de requisicao que ira fazer
      if (isPlaylistMundial) {
        uri = `${URL}/playlistmundial/${idPlaylist}`;
        playlistType = "PlaylistMundial";
      } else {
        uri = `${URL}/playlist/${idPlaylist}`;
        headers = { Authorization: token };
      }

      const response = await axios.get(uri, { headers: headers });

      if (isPlaylistMundial) {
        console.log(
          "------------------------------------------------------------------"
        );
        console.log(
          "Dados da playlist mundial coletados com sucesso",
          response.data.PlaylistMundial
        );
        console.log(
          "------------------------------------------------------------------"
        );
        const playlist = response.data.PlaylistMundial;
        setImagePlaylist(playlist.imagem);
        setTitlePlaylist(playlist.nome);
        setDescPlaylist(playlist.descricao);
      } else {
        console.log(
          "------------------------------------------------------------------"
        );
        console.log("Dados da playlist coletados com sucesso");
        console.log(
          "------------------------------------------------------------------"
        );
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

      if (isPlaylistMundial) {
        uri = `${URL}/playlistmundialmusica/getbyplaylist/${idPlaylist}`;
      } else {
        uri = `${URL}/playmusic/getbyplaylist/${idPlaylist}`;
        headers = { Authorization: token };
      }

      const response = await axios.get(uri, { headers: headers });

      if (isPlaylistMundial) {
        const musicas = response.data.musicasPlaylistMundial;
        setMusicas(musicas);
      } else {
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
    const loadData = async () => {
      setLoading(true);
      await getPlaylist();
      await getMusics();
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.opcao}>
        <Pressable onPress={() => navigationLink.navigate("Home")}>
          <Image source={seta} />
        </Pressable>
        <Text style={styles.upTitle}>DA PLAYLIST</Text>
        <Pressable
          onPress={() =>
            navigationLink.navigate("Menu", {
              imagem: imagePlaylist,
              title: titlePlaylist,
              isPlaylist: true,
              idPlaylist: idPlaylist,
            })
          }
        >
          <Image source={options} />
        </Pressable>
      </View>
      <View style={styles.titleContainer}>
        <Image style={styles.playlist} src={imagePlaylist} />
        <Text style={styles.title}>{titlePlaylist}</Text>
        <Text style={styles.tags}> {descPlaylist}</Text>
      </View>
      <Loading loading={loading} />

      <View style={styles.musics}>
        {musicas.map(
          async (element, index) => (
            console.log(element),
            (
              <MusicPlaylist
                title={element.musica.nomeMusica}
                artist={element.musica.artista}
                cover={element.musica.imagemMusica}
                idPlaylist={idPlaylist}
                isPlaylistMundial={isPlaylistMundial}
                idMusica={element.musica._id}
                back={"Playlist"}
                nomePlaylist={titlePlaylist}
              />
            )
          )
        )}
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
    // marginTop: 20,
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
