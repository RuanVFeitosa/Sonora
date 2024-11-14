import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, FlatList, StatusBar, SafeAreaView, SectionList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import profile from '../../assets/Taylor.png';
import notify from '../../assets/notify.png';
import settings from '../../assets/settings.png';
import gato from '../../assets/gato.jpg';

import c1 from '../../assets/c1.png'

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}> My Profile </Text>
      <Pressable style={styles.edit}>
        <Icon style={styles.editIcon} name='pencil' />
        <Text style={styles.editText}>Edit</Text>
      </Pressable>
      <Image style={styles.profile} source={profile} />
      <View style={styles.information}>
        <Text style={styles.name}>Taylor Swift</Text>
        <Text style={styles.email}>taylorswift@gmail.com</Text>
      </View>
      <View style={styles.cards}>
        <View style={styles.column}>
          <View style={styles.cd1}>
            <Pressable onPress={() => navigation.navigate('Fav')}>
              <Icon name="heart" size={20} color={'white'} left={40}/>
              <Text style={styles.textc1}>Favorites</Text>
            </Pressable>
          </View>
          <View style={styles.cd2}>
            <Pressable onPress={() => navigation.navigate('Notif')}>
            <Icon name="musical-notes" size={20} color={'white'} left={35} />
            <Text style={styles.textc2}>Playlist</Text>
            </Pressable>
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
    fontSize: 30,
    left: 40,
    top: 40,
    color: 'white'
  },

  edit: {
    padding: 30,
    width: 68,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    top: 3,
    left: 300
  },

  editIcon: {
    left: 5,
    top: 4,
    fontSize: 22,
    position: 'absolute'
  },

  editText: {
    left: 20,
    color: 'black'
  },

  profile: {
    width: 104,
    height: 116,
    top: 140,
    left: 140,
    borderRadius: 50,
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
    top: 130,
    left: 110,

    fontSize: 30,
    color: 'white'
  },

  email: {
    top: 130,
    left: 130,

    fontSize: 12,
    color: 'white'
  },

  cl: {
    color: 'white',
    width: 30,
    fontWeight: 'bold',
    fontSize: 20,
    top: 60,

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
    alignSelf: 'center',
    width: 100,
    margin: 20,
    flexDirection: 'row',
    height: 70,
    top: 130,
    borderRadius: 12,
    // left: 10,

    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 46,
  },
  
  cd2: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    width: 100,
    margin: 20,
    flexDirection: 'row',
    height: 70,
    top: 130,
    borderRadius: 12,
    // left: 10,

    backgroundColor: '#000000',
    borderWidth: 1,
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
    left: 20
  },

  textc2: {
    color: 'white',
    left: 25
  },



})