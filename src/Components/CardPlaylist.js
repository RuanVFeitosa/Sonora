import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function CardPlaylist(props) {
  const navigation = useNavigation();

  return (
    <Pressable style ={styles.container} onPress={() => navigation.navigate(props.pressable, 
    {
        idPlaylist: props.idPlaylist,
        isPlaylistMundial : true
    }
    ) }>

    {/* <View style={styles.container}> */}

      <Image style={styles.imagem} source={{uri : props.image}} />

      
    {/* </View> */}
    </Pressable>

  );
}

const styles = StyleSheet.create({
  container: {
    width: "49%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  imagem: {
    width: "100%",
    height: "100%",
    // zIndex : 12,
  },
});
