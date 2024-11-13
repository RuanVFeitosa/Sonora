import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList, StatusBar, SafeAreaView, SectionList, Pressable } from 'react-native';

import profile from '../../assets/Taylor.png';
import notify from '../../assets/notify.png';
import settings from '../../assets/settings.png';
import gato from '../../assets/gato.jpg';

import c1 from '../../assets/c1.png'

export default function Profile() {
  return (
    <View style={styles.container}>
        <Image style={styles.profile} source={profile}/>
        <View style={styles.information}>
          <Text style={styles.nameInformation}>Name</Text>
          <Text style={styles.name}>Taylor Swift</Text>
        </View>
      <View style={styles.cards}>
        <View style={styles.column}>
          <View>
            <Pressable onPress={() => navigation.navigate('Playlist')} style={styles.cd1}>
             
              <Text style={styles.textc1}>Gym Cat</Text>
            </Pressable>
          </View>
          <View style={styles.cd1}>
         
            <Text style={styles.textc1}>Coffee</Text>
          </View>
          <View style={styles.cd1}>
          
            <Text style={styles.textc1}>Coffee</Text>
          </View>
        </View>

      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  title: {
    color: 'white'
  },

  profile: {
    width: 104,
    height: 116,
    top: 50,
    left: 30,
    borderRadius: 100,
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
    bottom: 50,
    left: 150,

    fontSize: 30,
    color: 'grey'
  },

  cl: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    top: 60,
    marginBottom: 20,
  },

  information: {

  },

  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 50,
  },

  cd1: {
    display: 'flex',
    alignItems: 'center',
    width: 70,
    flexDirection: 'row',
    height: 50,
    borderRadius: 12,
    // left: 10,

    backgroundColor: '#000000',
    borderWidth: 2,
    borderColor: 'white',
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