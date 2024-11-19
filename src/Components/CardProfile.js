import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, FlatList, StatusBar, SafeAreaView, SectionList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function CardProfile(props) {

    const navigation = useNavigation();
    
  return (
    <View style={styles.cd1}>
            <Pressable onPress={() => navigation.navigate(props.pressable)}>
              <Icon name= {props.icon} size={20}  color={'white'} style={styles.iconc1} left={0}/>
              <Text style={styles.textc1}>{props.title}</Text>
            </Pressable>
          </View>
  )
}


const styles = StyleSheet.create({
    iconc1 : {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        width : 20,
        // borderWidth: 1,
        // borderColor: 'white',
      },
      cd1: {
        display: 'flex',
        justifyContent : 'center',
        alignItems: 'center',
        // alignSelf : 'center',
        // alignSelf: 'center',
        width: 90,
        margin: 20,
        // flexDirection: 'row',
        height: 70,
        // top: 130,
        borderRadius: 12,
        // left: 10,
    

        borderWidth: 1,
        borderColor: 'white',
        marginTop: 46,
      },
      textc1: {
        color: 'white',
        // left: 20
      },
})