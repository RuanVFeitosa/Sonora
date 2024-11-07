import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import profile from '../../assets/Profile.png';
import notify from '../../assets/notify.png';
import settings from '../../assets/settings.png';
import c1 from '../../assets/c1.png'

export default function Sign(props) {
  const { title = 'Enter' } = props;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#06A0B5', '#102B2D', 'black']}
        style={{ height: '100%', width: '100%', flex: 0.1, opacity: 50, }}
        start={{ x: 0.5, y: 0.6 }}>
        <View style={styles.header}>
          <Image style={styles.profile} source={profile} />
          <View style={styles.textContainer}>
            <Text style={styles.welcome}>Welcome Back!</Text>
            <Text style={styles.name}>Taylor Swift</Text>
          </View>
          <Image style={styles.notify} source={notify} />
          <Image style={styles.settings} source={settings} />
        </View>
      </LinearGradient>

      <Text style={styles.cl}>Continue Listening</Text>

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

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#000000',
  },

  gradientContainer: {
    flex: 0.2,
    opacity: 20,

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
    marginTop: 60,
    marginBottom: 10,
  },

  imgc1: {
    left: 2,
    
  },


  textc1: {
    color: 'white',
    left: 10,

  }
});
