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
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import profile from "../../assets/Taylor.png";
import notify from "../../assets/notify.png";
import settings from "../../assets/settings.png";
import gato from "../../assets/gato.jpg";

import c1 from "../../assets/c1.png";
import CardHome from "../Components/CardHome";
import axios from "axios";

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

export default function Home(props) {
  const navigation = useNavigation();
  const { title = "Enter" } = props;

  // State do nome do usuario
  const [nome, setNome] = useState("");

  // State do id do usuario
  const [id, setId] = useState("");

  // State do Token do usuario
  const [token, setToken] = useState("teste");

  const getUser = async () => {
    try {
      // Pegando o token do storage
      const token = await AsyncStorage.getItem("token");

      // Mudando o token do state do usuario
      await setToken(token);

      // Pegando o id do user no storage
      const userId = await AsyncStorage.getItem("userId");

      // Pegando os dados do usuario na api
      const response = await axios.get(
        `http://192.168.15.8:7050/user/${userId}`
      );

      // Criando variavel para poder manipular os dados do user
      const user = response.data.user;

      // Mudando o nome do state do usuario
      setNome(user.nome);

      // Mudando o id do state do usuario
      setId(user._id);
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

  const getPlaylist = async () => {
    try {
      // Pegando o token do storage
      const token = await AsyncStorage.getItem("token");

      const response = await axios.get("http://192.168.15.8:7050/playlist/", {
        headers: { Authorization: token },
      });
      console.log(response.data);

      if (response.data.playlists.length === 0) {
        console.log("tem nenhuma playlists");
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
  };

  useEffect(() => {
    getUser();
    getPlaylist();
  }, []);

  // console.log(nome)

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={["#06A0B5", "#06A0B5", "#102B2D", "black", "black"]}
        style={{ height: 160, width: "100%", opacity: 50 }}
        start={{ x: 0.5, y: 0.1 }}
      >
        <View style={styles.header}>
          <Image style={styles.profile} source={profile} />
          <View style={styles.textContainer}>
            <Text style={styles.welcome}>Welcome Back!</Text>
            <Text style={styles.name}>{nome}</Text>
          </View>

          {/* <Pressable onPress={() => navigation.navigate('Settings')}>
          <Image style={styles.settings} source={settings} />
        </Pressable> */}
        </View>
      </LinearGradient>

      <Text style={styles.cl}>Your Playlist</Text>

      <View style={styles.cards}>
        {/* Coluna da esquerda */}
        <View style={styles.column}>
          {/* <Text>Nenhuma playlist</Text> */}
          {/* <CardHome title={"Gym Cat"} source={gato} pressable={"Playlist"} /> */}
          <CardHome
            title={"From Zero"}
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNIT2bft_ZeRdkA1e3GXGn8eSAKpVaLN0ew&s"
            }
          />
        </View>

        {/* Coluna da direita */}
        {/* <View style={styles.column}>
          <CardHome title={"Coffee"} />
          <CardHome title={"Coffee"} />
          <CardHome title={"Coffee"} />
        </View> */}
      </View>

      <View style={styles.containerCard}>
        <StatusBar style="light" />
        <SafeAreaView style={{ flex: 1 }}>
          <SectionList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={({ section }) => (
              <>
                <Text style={styles.sectionHeader}>{section.title}</Text>
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("Playlist")}>
                      <ListItem item={item} />
                    </Pressable>
                  )}
                  showsHorizontalScrollIndicator={false}
                />
              </>
            )}
            renderItem={({ item, section }) => {
              return null;
              // return <ListItem item={item} />;
            }}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const SECTIONS = [
  {
    title: "Made for you",
    data: [
      {
        key: "1",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1/200",
      },
      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/10/200",
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1002/200",
      },
      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1006/200",
      },
      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1008/200",
      },
    ],
  },
  {
    title: "Punk and hardcore",
    data: [
      {
        key: "1",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1011/200",
      },
      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/1012/200",
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1013/200",
      },
      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1015/200",
      },
      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1016/200",
      },
    ],
  },
  {
    title: "Based on your recent listening",
    data: [
      {
        key: "1",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1020/200",
      },
      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/1024/200",
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1027/200",
      },
      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1035/200",
      },
      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1038/200",
      },
    ],
  },
];

const styles = StyleSheet.create({
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
    marginBottom: 20,
  },

  //--------------------------------------------------- Cards ----------------------------------------------------
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 70,
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
  containerCard: {
    flex: 1,
    backgroundColor: "#0000",
    bottom: 40,
  },

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
