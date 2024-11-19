import React, { useEffect, useState } from "react";
import * as Keychain from 'react-native-keychain';
import  AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/Logo-sf.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import apple from "../../assets/apple.png";
// import api from "../config/api";
import axios from "axios";
export default function Sign(props) {
  const navigation = useNavigation();
  const { title = "Enter" } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // Função para aparecer mensagem de erro na tela
  const createTwoButtonAlert = (subTitle) =>
    Alert.alert("Erro", subTitle, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  

  const login = async () => {
    try {

      // Criando variavel para armazenar os dados
      const data = {
        email: email,
        senha: password,
      };

      // Fazendo a requisição na API para fazer o login
      const response = await axios.post('http://192.168.56.1:7050/user/login', data, {'Content-Type': 'application/json'} );
      
      // Armazenando o token
      await AsyncStorage.setItem('token', response.data.login);
      navigation.navigate('Home');
      // console.log(await AsyncStorage.getItem('token'));
    } catch (error) {
      // Tratando os erros
      if (error.response) {
        console.log("data",error.response.data.msg);
        // Adicionando a mensagem de erro na tela
        createTwoButtonAlert(error.response.data.msg);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error('Error', error.message);
      }
      console.error(error.config);
    
    }
    
  };



  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Login to your account</Text>

        {/* Formulário de Login */}
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

        <Pressable style={styles.button} onPress={() => login()}>
          <Text style={styles.textButton}>{title}</Text>
        </Pressable>
    
        <View style={styles.containerInfo}>
        <Text style={styles.msgErroOculta} >Erro valide seus dados</Text>

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
                onPress={() => console.log("clicou")}
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
  msgErroOculta : {
    display : 'none',
    // color : 'white'
  },
  msgErro : {
    display : 'flex',
    color : 'white'
  },
  container: {
    display: "flex",
    alignItems: "center",
    flex: 3,
    backgroundColor: "#000000",
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
    marginBottom: 10,
    top: 200,
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
    top: 200,
    borderColor: "#444",
  },

  sites: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  containerInfo: {
    top: 220,
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
    top: 200,
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
