import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList, StatusBar, SafeAreaView, SectionList, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import c1 from '../../assets/c1.png'
export default function CardHome(props) {
  const navigation = useNavigation();

  return (
    //  <View style={styles.cards}>
      
      <View style={styles.column}>
        <Pressable onPress={() => navigation.navigate(props.pressable, 
          {
            idPlaylist : props.idPlaylist,
            isPlaylistMundial : false,
          }
          )}>
          <View style={styles.cd1}>
            <Image style={styles.imgc1} src={props.image} source={props.source} />
            <Text style={styles.textc1}>{props.title}</Text>
          </View>
        </Pressable>
      </View>
    /* </View> */
  )
}

const styles = StyleSheet.create({
  cards: {
    flexDirection: 'row',
    backgroundColor : 'red',
    justifyContent: 'space-between',
    // width : "100%",
    // bottom: 140,
  },
  column: {
    // display: 'grid',
    // flex: 1,
    flexDirection: 'row',
    
    // alignItems: 'center',
    flexWrap: 'wrap'
  },

  cd1: {
    display: 'flex',
    alignItems: 'center',
    width: 160,
    flexDirection: 'row',
    height: 55,
    borderRadius: 10,
    // left: 10,

    backgroundColor: 'rgba(67, 99, 105, 0.2)',
    marginBottom: 20,
  },
  imgc1: {
    width: 53,
    height: '100%',
    borderRadius: 10,
    // left: 2,
  },

  textc1: {
    maxWidth:'60%',
    color: 'white',
    fontSize:20,
    justifyContent:'center',
    left: 10,
  },
})