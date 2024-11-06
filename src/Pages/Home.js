import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/Logo-sf.png';
import profile from '../../assets/Profile.png';


export default function Sign(props) {
  const navigation = useNavigation();
  const { title = 'Enter' } = props;

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.profile} source={profile}/>
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.name}>Taylor Swift</Text>

       
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 3,
    backgroundColor: '#000000',
  },

  profile: {
    right: 150,
    top: 50,
    width:50,
    height:50,
    display:'flex',
   
  },

  welcome: {
    right: 50,
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },

  name: {
    right: 60,
    color: 'grey'
  },

  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#1E1E1E',
    color: 'white',
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#444',
  },

  sites: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  containerInfo: {
    top: 50,
    display: 'flex',
  },

  containerLine: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
  },

  textLine: {
    marginHorizontal: 10,
    color: '#fff',
    fontWeight: 'bold',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
    marginVertical: 10,
  },

  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },

  account: {
    alignItems: 'center',
    color: 'white',
    marginTop: 20,
  },

  textSignUp: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});
