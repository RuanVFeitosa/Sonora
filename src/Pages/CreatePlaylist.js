import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TextInput, StyleSheet, Image, FlatList, StatusBar, SafeAreaView, SectionList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CreatePlaylist() {
  const navigation = useNavigation();

  const [playlist, setPlaylist] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.newPlaylist}>New Playlist</Text>
      <TextInput
        style={styles.input}
        placeholder="Give your playlist a title"
        placeholderTextColor="#8A9A9D"
        value={playlist}
        onChangeText={setPlaylist}
        keyboardType="default"
        autoCapitalize="none"
      />
      <View style={styles.button}>
        <View style={styles.column}>

          <Pressable onPress={() => navigation.navigate('Profile')}  style={styles.buttonCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>

          <Pressable style={styles.buttonCreate}>
            <Text style={styles.buttonText}>Create</Text>
          </Pressable>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
    backgroundColor: '#000000',
  },

  newPlaylist: {
    fontSize: 20,
    color: 'white',
  },

  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#000000',
    color: 'white',
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#8A9A9D',
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'center',

  },

  column: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 100, // Adiciona espaço entre os botões (se disponível)
  },

  buttonCreate: {
    width: 75,
    height: 29,
    backgroundColor: '#06A0B5',
    justifyContent: 'center', // Alinha o conteúdo verticalmente
    alignItems: 'center', // Alinha o conteúdo horizontalmente

    borderRadius: 20, 
    shadowColor: '#06A0B5', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 10, 
    elevation: 10, 
  },

  buttonCancel: {
    width: 75,
    height: 29,
    backgroundColor: '#2C2F30',
    justifyContent: 'center', 
    alignItems: 'center', 

    borderRadius: 20, 
    shadowColor: '#2C2F30', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 10, 
    elevation: 10, 
    
  },

  buttonText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
  },
});
