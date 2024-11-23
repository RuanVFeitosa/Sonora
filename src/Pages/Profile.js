import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, FlatList, StatusBar, SafeAreaView, SectionList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
// require('dotenv').config();
import { URL } from '@env';

import profile from '../../assets/Taylor.png';
import notify from '../../assets/notify.png';
import settings from '../../assets/settings.png';
import gato from '../../assets/gato.jpg';

import c1 from '../../assets/c1.png'
import CardProfile from '../Components/CardProfile';
import CardHome from '../Components/CardHome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Profile() {
  const navigation = useNavigation();


   // State do nome do usuario
   const [nome, setNome] = useState("");

   // State do id do usuario
   const [id, setId] = useState("");

   // State do email do usuario
   const [email, setEmail] = useState("");

   // State da imagem de perfil do usuario
   const [fotoPerfil, setFotoPerfil] = useState("");


  const getUser = async () => {
    try {
      // Pegando o token do storage
      const token = await AsyncStorage.getItem("token");

      // Mudando o token do state do usuario
      // await setToken(token);
      
      // Pegando o id do user no storage
      const userId = await AsyncStorage.getItem("userId");

      // Pegando os dados do usuario na api
      const response = await axios.get(
        `${URL}/user/${userId}`
      );

      // Criando variavel para poder manipular os dados do user
      const user = response.data.user;

      // Mudando o nome do state do usuario
      setNome(user.nome);

      // Mudando o id do state do usuario
      setId(user._id);

      // Mudando o email do state do usuario
      setEmail(user.email);

      // Mudando a imagem de perfil do usuario
      setFotoPerfil(user.fotoPerfil);
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
        console.error("Erroeor", error.message);
      }
      console.error(error.config);
    }
  };

  useEffect(() => {
     getUser();
  },[]);
  return (
    <LinearGradient
      colors={['#4C4C4C', '#000000']} // Gradiente de cinza para preto
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>My Profile</Text>
      <Pressable style={styles.edit} onPress={() => navigation.navigate('Edit')}>
        <Icon style={styles.editIcon} name='pencil' />
        <Text style={styles.editText}>Edit</Text>
      </Pressable>
      <Image style={styles.profile} src={fotoPerfil} />
      <View style={styles.information}>
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.email}>{email}</Text>
        {/* <Text style={styles.follow}>123.7 million followers</Text> */}
      </View>
      <View style={styles.cards}>
        <View style={styles.column}>
          <CardProfile title={"Favorites"} icon={"heart"} pressable={"Fav"} />
          <CardProfile title={"New Playlist"} icon={"add"} pressable={"Create Playlist"} />
          <CardProfile title={"Playlist"} icon={"musical-notes"} pressable={"Home"} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    left: 40,
    top: 40,
    color: 'white',
  },
  edit: {
    padding: 30,
    width: 68,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    top: 3,
    left: 300,
  },
  editIcon: {
    left: 5,
    top: 4,
    fontSize: 22,
    position: 'absolute',
  },
  editText: {
    left: 20,
    color: 'black',
  },
  profile: {
    width: 104,
    height: 116,
    top: 140,
    left: 140,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    top: 130,
    left: 110,
    fontSize: 30,
    color: 'white',
  },
  email: {
    top: 130,
    left: 130,
    fontSize: 12,
    color: 'white',
  },
  follow: {
    top: 130,
    left: 130,
    fontSize: 12,
    color: 'white',
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    marginTop: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});