import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  StatusBar,
  SafeAreaView,
  SectionList,
  Pressable,
  Alert,
} from "react-native";
import axios from "axios";
// require('dotenv').config();
import AsyncStorage from "@react-native-async-storage/async-storage";
import { URL } from "@env";
import Icon from "react-native-vector-icons/Ionicons";

export default function CreatePlaylist() {
  const navigation = useNavigation();

  const [playlistNome, setPlaylistNome] = useState("");
  const [playlistDesc, setPlaylistDesc] = useState("");
  const [playlistImg, setPlaylistImg] = useState("");
  const [loading, setLoading] = useState(false);
  // Função para aparecer mensagem de erro na tela
  const createTwoButtonAlert = (title, subTitle) =>
    Alert.alert(title, subTitle, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const validateData = async (data) => {
    if (!data.nome) {
      return {
        isValid: false,
        msg: "Envie o nome",
      };
    }
    return {
      isValid: true,
    };
  };
  const createPlaylist = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        console.error("Token não encontrado");
        // Sai da função se o token não for encontrado
        return navigation.navigate("Login");
      }
      const data = {
        nome: playlistNome,
        descricao: playlistDesc,
        imagem: playlistImg,
      };

      // Validando se os dados estão corretos
      const dataIsValid = await validateData(data);

      if (!dataIsValid.isValid) {
        return createTwoButtonAlert("Erro", dataIsValid.msg);
      }
      setLoading(true);
      const response = await axios.post(`${URL}/playlist/`, data, {
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      setLoading(false);
      createTwoButtonAlert("Sucesso !", "Playlist criada com sucesso");
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } catch (error) {
      // Tratando os erros
      if (error.response) {
        console.log("data", error.response.data.msg);
        // Adicionando a mensagem de erro na tela
        setLoading(false);
        createTwoButtonAlert("erro", error.response.data.msg);
        console.error(error.response.status);
        // if(error.response.status === 401){
        //   navigation.navigate('Login');
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

  return (
    <View style={styles.container}>
      <Text style={styles.newPlaylist}>New Playlist</Text>

      <TextInput
        style={styles.input}
        placeholder="Give your playlist a title"
        placeholderTextColor="#8A9A9D"
        value={playlistNome}
        onChangeText={setPlaylistNome}
        keyboardType="default"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Give your playlist a description"
        placeholderTextColor="#8A9A9D"
        value={playlistDesc}
        onChangeText={setPlaylistDesc}
        keyboardType="default"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Give your playlist a url image"
        placeholderTextColor="#8A9A9D"
        value={playlistImg}
        onChangeText={setPlaylistImg}
        keyboardType="default"
        autoCapitalize="none"
      />
      <View style={styles.button}>
        <View style={styles.column}>
          <Pressable
            onPress={() => navigation.navigate("Profile")}
            style={styles.buttonCancel}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>

          <Pressable
            style={styles.buttonCreate}
            onPress={() => createPlaylist()}
          >
            <Text style={styles.buttonText}>Create</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    backgroundColor: "#000000",
  },

  newPlaylist: {
    fontSize: 20,
    color: "white",
  },

  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#000000",
    color: "white",
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#8A9A9D",
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
  },

  column: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 100, // Adiciona espaço entre os botões (se disponível)
  },

  buttonCreate: {
    width: 75,
    height: 29,
    backgroundColor: "#06A0B5",
    justifyContent: "center", // Alinha o conteúdo verticalmente
    alignItems: "center", // Alinha o conteúdo horizontalmente

    borderRadius: 20,
    shadowColor: "#06A0B5",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },

  buttonCancel: {
    width: 75,
    height: 29,
    backgroundColor: "#2C2F30",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 20,
    shadowColor: "#2C2F30",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },

  buttonText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    color: "white",
  },
});
