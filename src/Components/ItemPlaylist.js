import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text } from "react-native";
import { URL } from '@env';

export default function ItemPlaylist({
  imagem,
  title,
  idPlaylist,
  nomePlaylist,
  nomeMusica,
  idMusica
}) {
  // Função para aparecer mensagem de erro na tela
  const navigation = useNavigation();

  //   const [isAccepted, setIsAccepted] = useState(null);
  const createTwoButtonAlert = (title, subTitle) => {
    return new Promise((resolve) => {
      Alert.alert(title, subTitle, [
        {
          text: "Não",
          onPress: () => resolve(false), // Resolve com "false" se o usuário clicar em "Não"
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => resolve(true), // Resolve com "true" se o usuário clicar em "Sim"
        },
      ]);
    });
  };

  const createTwoButtonAlert2 = (subTitle) =>
    Alert.alert("Sucesso", subTitle, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const adicionarMusicaPlaylist = async (idPlaylist) => {
    try {
      const isAccepted = await createTwoButtonAlert(
        "Alerta",
        `Deseja adicionar ${nomeMusica} em ${nomePlaylist}`
      );
      if (isAccepted) {

        const token = await AsyncStorage.getItem('token');
        if(!token){
            navigation.navigate('Login');
        }

        const data = {
            idMusica : idMusica,
            idPlaylist : idPlaylist
        }

        const response = await axios.post(`${URL}/playmusic/`, data, {headers : {'Authorization' : token , "Content-Type": "application/json"} , } );
        
        createTwoButtonAlert2("Musica adicionada na playlist com sucesso !");
        navigation.navigate('Home');
        // console.log(response.data);



        // console.log("-------------------------------idPlaylist-----------------------------------------")
        // console.log(idPlaylist);
        // console.log("------------------------------------------------------------------------")

        // console.log("-------------------------------idMusica-----------------------------------------")
        // console.log(idMusica);
        // console.log("------------------------------------------------------------------------")

        // console.log("-------------------------------token-----------------------------------------")
        // console.log(token);
        // console.log("------------------------------------------------------------------------")

        // console.log("aqui ia adicionar a musica na playlist");


      }else {
        console.log("aqui ia voltar");
      }
    } catch (error) {
      // Tratando os erros
      if (error.response) {
        // console.log("data", error.response.data.msg);
        // Adicionando a mensagem de erro na tela
        // createTwoButtonAlert(error.response.data.msg);
        if(error.response.status === 400){
          createTwoButtonAlert("Erro", `A música ${nomeMusica} já está na ${nomePlaylist}, por favor, selecione outra`);
          }
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

  return (
    <Pressable
      style={styles.containerPlaylist}
      onPress={() => adicionarMusicaPlaylist(idPlaylist)}
    >
      <Image style={styles.image} source={{ uri: imagem }} />
      <Text style={styles.textPlaylist}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerPlaylist: {
    marginTop: 10,
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "row",
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
