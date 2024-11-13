import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList, StatusBar, SafeAreaView, SectionList, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Logo from '../../assets/Logo-sf.png'
import profile from '../../assets/Profile.png';
import notify from '../../assets/notify.png';
import settings from '../../assets/settings.png';
import c1 from '../../assets/c1.png'

export default function Explore(props) {
  const { title = 'Enter' } = props;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.search}>
          <Image source={Logo}/>
      </View>
      <View style={styles.cards}>
        {/* Coluna da esquerda */}
        <View style={styles.column}>
          <View style={styles.cd1}>
            <Image style={styles.imgc1} source={c1} />
            <Text style={styles.textc1}>Coffee</Text>
          </View>
          <View style={styles.cd1}>
            <Image style={styles.imgc1} source={c1} />
            <Text style={styles.textc1}>Coffee</Text>
          </View>
          <View style={styles.cd1}>
            <Image style={styles.imgc1} source={c1} />
            <Text style={styles.textc1}>Coffee</Text>
          </View>
        </View>

        {/* Coluna da direita */}
        <View style={styles.column}>
          <View style={styles.cd1}>
            <Image style={styles.imgc1} source={c1} />
            <Text style={styles.textc1}>Coffee</Text>
          </View>
          <View style={styles.cd1}>
            <Image style={styles.imgc1} source={c1} />
            <Text style={styles.textc1}>Coffee</Text>
          </View>
          <View style={styles.cd1}>
            <Image style={styles.imgc1} source={c1} />
            <Text style={styles.textc1}>Coffee</Text>
          </View>
        </View>
      </View>

    
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
    display: 'flex',
    left: 90,
    top: 35,
    width: 23,
    height: 25,
  },

  settings: {
    display: 'flex',
    left: 100,
    top: 35,
    width: 30,
    height: 35,
  },

  textContainer: {
    flexDirection: 'column',
  },

  welcome: {
    top: 50,
    left: 30,
    fontSize: 22,
    color: 'white',
    marginBottom: 5,
  },

  name: {
    top: 40,
    left: 30,
    color: 'grey'
  },

  cl: {
    color: 'white',
    fontWeight:'bold',
    fontSize: 20,
    top: 60,
    marginBottom: 20,
  },

  //--------------------------------------------------- Cards ----------------------------------------------------
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
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
    borderRadius:10,
    left: 2,
  },

  textc1: {
    color: 'white',
    left: 10,
  },

  //--------------------------------------------------- Horizontal Cards ----------------------------------------------------
  containerCard: {
    flex: 1,
    backgroundColor: '#0000',
  },
  
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
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
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});
