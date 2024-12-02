import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  StatusBar,
  SafeAreaView,
  SectionList,
  ScrollView,
  Pressable,
} from "react-native";
import CardPlaylist from "../Components/CardPlaylist";
import ItemPlaylist from "../Components/ItemPlaylist";
// require('dotenv').config();
import { URL } from "@env";
import Loading from "../Components/Loading";

export default function Library({ route }) {
  const { idMusica, nomeMusica } = route.params;

  console.log("aqui ta o id da musica", idMusica);

  console.log("aqui ta o nome da musica", nomeMusica);
  const [playlist, setPlaylist] = useState([]);

  const [playlistSelected, setPlaylistSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const getPlaylist = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      headers = { Authorization: token };
      const response = await axios.get(`${URL}/playlist`, {
        headers: { Authorization: token },
      });

      console.log("------------------------------------------------------");
      // console.log(response.data.playlists);
      setPlaylist(response.data.playlists);
      console.log("useState da playlist", playlist);
      console.log("------------------------------------------------------");
    } catch (error) {
      // Tratando os erros
      if (error.response) {
        // console.log("data", error.response.data.msg);
        // Adicionando a mensagem de erro na tela
        // createTwoButtonAlert(error.response.data.msg);
        // console.error(error.response.status);
        // if (error.response.status === 401) {
        //   navigationLink.navigate("Login");
        // }
        // console.error(error.response.headers);
      } else if (error.request) {
        // console.error(error.request);
      } else {
        // console.error("Erroor", error.message);
      }
      // console.error(error.config);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await getPlaylist();
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <View style={styles.containerCard}>
      <Loading loading={loading} />
      <Text style={styles.cl}>Selecione sua playlist</Text>
      <View style={styles.grid}>
        {playlist.map((element, index) => (
          // console.log("================================================"),
          // console.log("================================================"),
          // console.log("dentro do map",element),
          <ItemPlaylist
            imagem={element.imagem}
            title={element.nome}
            idPlaylist={element._id}
            nomePlaylist={element.nome}
            idMusica={idMusica}
            nomeMusica={nomeMusica}
          />
          // console.log("================================================"),
          // console.log("================================================")
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    backgroundColor: "black",
    // justifyContent: "center",
    padding: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap", // Permite quebra de linha
    justifyContent: "space-between", // Espaçamento entre os itens
  },
  cl: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 15,
    // bottom: 30,
    // marginBottom: 20,
  },
  containerPlaylist: {
    marginTop: 10,
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "row",
    // justifyContent : 'center'
    alignItems: "center",
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 0.5,
  },
  image: {
    width: 70,
    height: 70,
  },
  textPlaylist: {
    fontSize: 20,
    marginLeft: 10,
    color: "white",
  },
});
