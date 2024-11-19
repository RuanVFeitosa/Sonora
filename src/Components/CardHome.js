import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList, StatusBar, SafeAreaView, SectionList, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import c1 from '../../assets/c1.png'
export default function CardHome(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.cards}>
      {/* Coluna da esquerda */}
      <View style={styles.column}>
        <Pressable onPress={() => navigation.navigate(props.pressable)}>
          <View style={styles.cd1}>
            <Image style={styles.imgc1} src={props.image} source={props.source} />
            <Text style={styles.textc1}>{props.title}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 140,
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
    width: 180,
    flexDirection: 'row',
    height: 50,
    borderRadius: 20,
    // left: 10,

    backgroundColor: 'rgba(67, 99, 105, 0.2)',
    marginTop: 46,
  },
  imgc1: {
    width: 53,
    height: 54,
    borderRadius: 10,
    left: 2,
  },

  textc1: {
    color: 'white',
    left: 10,
  },
})