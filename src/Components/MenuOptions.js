import React from "react";
import { Alert, Image, Pressable, StyleSheet, Text } from "react-native";
import remove from "../../assets/remove.png";
import axios, { Axios } from "axios";
import { URL } from '@env';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function MenuOptions({idPlaylist, title, idMusic, nameFunction}) {
  const navigation = useNavigation();

  const createTwoButtonAlert = (subTitle) =>
    Alert.alert("Erro", subTitle, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);


  const removerPlaylist = async() => {
    try {
      const token = await AsyncStorage.getItem('token');
      if(!token){
        console.log("Token não encontrado !");
      }
      const response = await axios.delete(`${URL}/playlist/${idPlaylist}`, {headers : {'Authorization' : token}});

      if(response.status === 200){
        createTwoButtonAlert("Playlist deletada com sucesso !");
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }
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
  }

  const removerMusicaPlaylist = async () => {
    try {
      console.log("clicou para remover a musica")
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
  }

  return (
    <Pressable onPress={() => console.log("teste")
    }>
      <Text style={styles.menuOptions}>
        <Image source={remove} />
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menuOptions: {
    color: "white",
    padding: 20,
  },
});
