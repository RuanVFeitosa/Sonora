import React, { useEffect, useRef, useState } from "react";
import * as Keychain from "react-native-keychain";
import AsyncStorage from "@react-native-async-storage/async-storage";
// require('dotenv').config();

import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  Alert,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/Logo-sf.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import apple from "../../assets/apple.png";
// import api from "../config/api";
import { URL } from "@env";

import axios from "axios";
export default function Sign(props) {
  const navigation = useNavigation();
  const { title = "Enter" } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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

    const validateData = async (data) => {

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

  const login = async () => {
    try {
      console.log(
        "--------------------------------------------------------------------"
      );
      console.log(URL);
      console.log(
        "--------------------------------------------------------------------"
      );

      // Criando variavel para armazenar os dados
      const data = {
        email: email,
        senha: password,
      };

      // Validando se os dados estão corretos
    const dataIsValid = await validateData(data);

    if (!dataIsValid.isValid) {
      return createTwoButtonAlert(dataIsValid.msg);
    }

      // Fazendo a requisição na API para fazer o login
      setLoading(true);
      const response = await axios.post(`${URL}/user/login`, data, {
        "Content-Type": "application/json",
      });
      setLoading(false);

      const token = response.data.login.token;
      // Armazenando o token
      await AsyncStorage.setItem("token", response.data.login.token);
      // Armazenando o id do usuario
      await AsyncStorage.setItem("userId", response.data.login.user);
      navigation.navigate("Home");
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
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={false}
      >
        <View style={styles.containerView}>
          <Text style={styles.title}>Login to your account</Text>

          {/* Formulário de Login */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaaaaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            // autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaaaaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Modal transparent = {true} visible = {loading}>
            <ActivityIndicator
              size={"large"}
              animating={loading}
              style = {styles.loading}
            />
          </Modal>

          <Pressable style={styles.button} onPress={() => login()}>
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
                Don't have an account?
                <Pressable
                  style={styles.signUpButton}
                  onPress={() => navigation.navigate("Sign")}
                >
                  <Text style={styles.textSignUp}>Sign Up</Text>
                </Pressable>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <View style={styles.container}>
        
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  loading: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "black",
    zIndex: 1,
    opacity: 0.7,
  },
  signUpButton: {
    backgroundColor: "transparent",
    padding: 0,
    margin: 0,
  },
  msgErroOculta: {
    display: "none",
    // color : 'white'
  },
  msgErro: {
    display: "flex",
    color: "white",
  },
  container: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    // flex: 3,
    flex: 1,
    // height : '100%',
    backgroundColor: "#000000",
  },

  containerView: {
    // display : 'flex',
    // flexGrow : 1,
    justifyContent: "center",
    // alignContent : 'center',
    alignItems: "center",
    // backgroundColor : 'blue',
    height: "100%",
    flex: 1,

    // marginTop : 10
  },

  image: {
    justifyContent: "center",
    alignItems: "center",
    width: 370,
    height: 300,
  },

  title: {
    fontSize: 30,
    color: "white",
    // marginBottom: 10,
    // top: 200,
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
    // zIndex : 1,
    // top: 200,
    borderColor: "#444",
  },

  sites: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  containerInfo: {
    // top: 220,
    display: "flex",
  },

  containerLine: {
    flexDirection: "row",
    alignItems: "center",
    // paddingBottom: 20,
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
    // alignItems: "center",
    // justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
    marginVertical: 10,
    // top: 200,
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
    // marginTop: 10,
  },

  textSignUp: {
    // marginLeft: 10,
    // marginTop :10,
    color: "white",
    fontWeight: "bold",
    // left : 10,
  },
});
