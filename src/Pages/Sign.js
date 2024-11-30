import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  Alert,
  Modal,
  ActivityIndicator,
} from "react-native";
import { URL } from "@env";

import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/Logo-sf.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import apple from "../../assets/apple.png";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../Components/Loading";
// require('dotenv').config();
export default function Sign(props) {
  const navigation = useNavigation();
  const { title = "Enter" } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");

  const [loading, setLoading] = useState(false);

  const createTwoButtonAlert = (subTitle) =>
    Alert.alert("Erro", subTitle, [
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

    if (!data.email) {
      return {
        isValid: false,
        msg: "Envie o email",
      };
    }

    if (!data.senha) {
      return {
        isValid: false,
        msg: "Envie a senha",
      };
    }
    return {
      isValid: true,
    };
  };

  const cadastro = async () => {
    const data = {
      nome: nome,
      email: email,
      senha: password,
    };

    // Validando se os dados estão corretos
    const dataIsValid = await validateData(data);

    if (!dataIsValid.isValid) {
      return createTwoButtonAlert(dataIsValid.msg);
    }

    try {
      // Criando a conta
      setLoading(true);
      const response = await axios.post(`${URL}/user`, data, {
        "Content-Type": "application/json",
      });
      setLoading(false);

      // Fazendo o login
      const login = await axios.post(`${URL}/user/login`, data, {
        "Content-Type": "application/json",
      });

      // Armazenando o token
      await AsyncStorage.setItem("token", login.data.login.token);

      const dataPlaylist = {
        nome: "Playlist Inicial",
        descricao: "Playlist criada para você pela Sonora",
        imagem:
          "https://files.oaiusercontent.com/file-9OFkKhIUZTL7xj3l2rBVxerf?se=2024-11-25T17%3A11%3A15Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3887e38a-59cd-4410-b231-8b40b2b1ae39.webp&sig=QPIzwOO3U6zCjhf5lOZGj1oZogZlT6iPK9hMhLNq8mM%3D",
      };

      // Criando playlist
      const createPlaylist = await axios.post(`${URL}/playlist`, dataPlaylist, {
        headers: {
          "Content-Type": "application/json",
          Authorization: login.data.login.token,
        },
      });

      // Armazenar o id do user
      await AsyncStorage.setItem("userId", login.data.login.user);

      // Indo para o home
      navigation.navigate("Home");

      console.log(response.data);
    } catch (error) {
      // Tratando os erros
      if (error.response) {
        console.log("data", error.response.data.msg);
        // Adicionando a mensagem de erro na tela
        createTwoButtonAlert(error.response.data.msg);
        setLoading(false);

        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error("Erroor", error.message);
      }
      console.error(error.config);
    }

    // console.log(data);
  };

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={Logo} />
        <Text style={styles.title}>Create your account</Text>

        {/* Formulário de Login */}
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#aaaaaa"
          value={nome}
          onChangeText={setNome}
          keyboardType="default"
          autoCapitalize="words"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaaaaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaaaaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <Loading loading={loading}/>

        <Pressable style={styles.button} onPress={() => cadastro()}>
          <Text style={styles.textButton}>{title}</Text>
        </Pressable>

        <View style={styles.containerInfo}>
          <View style={styles.containerLine}>
            <View style={styles.line} />
            <Text style={styles.textLine}>or continue with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.sites}>
            <Image source={google} />
            <Image source={facebook} />
            <Image source={apple} />
          </View>

          <View>
            <Text style={styles.account}>
              Have an account?
              <Pressable
                style={styles.signUpButton}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.textSignUp}>Sign Up</Text>
              </Pressable>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#000000",
  },

  image: {
    // justifyContent: "center",
    // alignItems: "center",
    width: 370,
    height: 300,
  },

  title: {
    fontSize: 30,
    color: "white",
    marginBottom: 10,
  },

  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#1E1E1E",
    color: "white",
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#444",
  },

  sites: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  containerInfo: {
    top: 30,
    display: "flex",
  },

  containerLine: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#fff",
  },

  textLine: {
    marginHorizontal: 10,
    color: "#fff",
    fontWeight: "bold",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
    marginVertical: 10,
  },

  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },

  account: {
    alignItems: "center",
    color: "white",
    marginTop: 20,
  },

  textSignUp: {
    marginLeft: 10,
    color: "white",
    fontWeight: "bold",
  },
});
