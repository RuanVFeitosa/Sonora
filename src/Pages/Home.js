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
// require('dotenv').config();
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { URL } from '@env';

import profile from "../../assets/Taylor.png";
import notify from "../../assets/notify.png";
import settings from "../../assets/settings.png";
import gato from "../../assets/gato.jpg";

import c1 from "../../assets/c1.png";
import CardHome from "../Components/CardHome";
import axios from "axios";
import CardPlaylist from "../Components/CardPlaylist";

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export default function Home() {
  const navigation = useNavigation();

  // State do nome do usuario
  const [nome, setNome] = useState("");

  // State do id do usuario
  const [id, setId] = useState("");

  // State do Token do usuario
  const [token, setToken] = useState("teste");

  // State playlist
  const [playlist, setPlaylist] = useState([]);

  // State playlist mundial
  const [playlistMundial, setPlaylistMundial] = useState([]);

  // State da foto de perfil do usuario
  const [imagemPerfil, setImagemPerfil] = useState("");

  // Função para aparecer mensagem de erro na tela
  const createTwoButtonAlert = (subTitle) =>
    Alert.alert("Erro", subTitle, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const getUser = async () => {
    try {
      // Pegando o token do storage
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        console.error("Token não encontrado.");
        return; // Sai da função se o token não for encontrado
      }

      // Mudando o token do state do usuario
      await setToken(token);

      // Pegando o id do user no storage
      const userId = await AsyncStorage.getItem("userId");

      // Pegando os dados do usuario na api
      const response = await axios.get(
        `${URL}/user/${userId}`
      );

      // Criando variavel para poder manipular os dados do user
      const user = response.data.user;

      console.log("------------------------------------------------------------------");
      console.log("Dados do usuario coletado com sucesso !");
      console.log("------------------------------------------------------------------");

      
      // Mudando o nome do state do usuario
      setNome(user.nome);

      // Mudando a imagem do state do usuario
      setImagemPerfil(user.fotoPerfil);

      // Mudando o id do state do usuario
      setId(user._id);
    } catch (error) {
      // Tratando os erros
      if (error.response) {
        console.log("data", error.response.data.msg);
        // Adicionando a mensagem de erro na tela
        createTwoButtonAlert(error.response.data.msg);
        // Mensagens de erros
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error("Erroor", error.message);
      }
      console.error(error.config);
    }
  };

  const getPlaylist = async () => {
    try {
      // Pegando o token do storage
      const token = await AsyncStorage.getItem("token");

      // Pegando todas as playlist do usuario
      const response = await axios.get(`${URL}/playlist/`, {
        headers: { Authorization: token },
      });

      // Colocando as playlist no state
      setPlaylist(response.data.playlists);

      
      console.log("------------------------------------------------------------------");
      console.log("Playlists do usuario coletada com sucesso !");
      console.log("------------------------------------------------------------------");

    
    } catch (error) {
      // Tratando os erros
      if (error.response) {
        console.log("data", error.response.data.msg);
        // Adicionando a mensagem de erro na tela
        // createTwoButtonAlert(error.response.data.msg);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error("Erroor", error.message);
      }
      console.error(error.config);
    }
  };

  const getPlaylistMundial = async () => {
    try {
      // Pegando o token do storage
      // const token = await AsyncStorage.getItem("token");

      // Pegando todas as playlists mundiais
      const response = await axios.get(
        `${URL}/playlistmundial/`
      );

      // Mudando o state da playlist mundial
      setPlaylistMundial(response.data.PlayListMundial);

      console.log("------------------------------------------------------------------");
      console.log("Todas as playlists mundiais coletadas com sucesso !");
      console.log("------------------------------------------------------------------");

      
      
    } catch (error) {
      // Tratando os erros
      if (error.response) {
        console.log("data", error.response.data.msg);
        // Adicionando a mensagem de erro na tela
        // createTwoButtonAlert(error.response.data.msg);
        console.error(error.response.status);
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
      await getUser();
      await getPlaylist();
      await getPlaylistMundial();
    };

    loadData();
  }, []);

  // useEffect(async() => {
  //   getUser();
  //   getPlaylist();
  // }, []);

  // console.log(nome)

  return (
    <>
      <ScrollView style={styles.container}>
        <LinearGradient
          colors={["#06A0B5", "#06A0B5", "#102B2D", "black", "black"]}
          style={{ height: 160, width: "100%", opacity: 50 }}
          start={{ x: 0.5, y: 0.1 }}
        >
          <View style={styles.header}>
            <Image style={styles.profile} src={imagemPerfil} />
            <View style={styles.textContainer}>
              <Text style={styles.welcome}>Welcome Back!</Text>
              <Text style={styles.name}>{nome}</Text>
            </View>
          </View>
        </LinearGradient>

        <Text style={styles.cl}>Your Playlist</Text>
        <View style={styles.cards}>
          <View style={styles.column}>
            {playlist.map(
              (element, index) => (
                (
                  
                  <CardHome
                    key={index}
                    title={element.nome}
                    image={element.imagem}
                    pressable={"Playlist"}
                    idPlaylist={element._id}
                  />
                )
              )
            )}
          </View>
        </View>

        <View style={styles.containerCard}>
          <Text style={styles.cl}>Playlist Sonora</Text>
          <View style={styles.grid}>

            {
              playlistMundial.map((element, index) => (
                
                <CardPlaylist image = {element.imagem} pressable = {'Playlist'} idPlaylist = {element._id}/>
              ))
            }
            
  
          </View>
        </View>
      </ScrollView>
    </>
  );
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
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  profile: {
    width: 50,
    height: 50,
    top: 50,
    left: 30,
    borderRadius: 25,
    marginRight: 10,
  },

  notify: {
    display: "flex",
    left: 90,
    top: 35,
    width: 23,
    height: 25,
  },

  settings: {
    display: "flex",
    left: 100,
    top: 35,
    width: 30,
    height: 35,
  },

  textContainer: {
    flexDirection: "column",
  },

  welcome: {
    top: 50,
    left: 30,
    fontSize: 22,
    color: "white",
    marginBottom: 5,
  },

  name: {
    top: 40,
    left: 30,
    color: "grey",
  },

  cl: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    bottom: 30,
    // marginBottom: 20,
  },

  //--------------------------------------------------- Cards ----------------------------------------------------
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 70,
    // backgroundColor : 'black'
  },
  column: {
    // display: 'grid',
    // flex: 1,
    flexDirection: "row",
    // alignItems: 'center',
    flexWrap: "wrap",
  },

  cd1: {
    display: "flex",
    alignItems: "center",
    width: 180,
    flexDirection: "row",
    height: 50,
    borderRadius: 20,
    // left: 10,

    backgroundColor: "rgba(67, 99, 105, 0.2)",
    marginTop: 46,
  },

  imgc1: {
    width: 53,
    height: 54,
    borderRadius: 10,
    left: 2,
  },

  textc1: {
    color: "white",
    left: 10,
  },

  //--------------------------------------------------- Horizontal Cards ----------------------------------------------------

  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#f4f4f4",
    marginTop: 20,
    marginBottom: 5,
  },

  item: {
    margin: 10,
  },

  itemPhoto: {
    width: 200,
    height: 200,
  },

  itemText: {
    color: "rgba(255, 255, 255, 0.5)",
    marginTop: 5,
  },
});
