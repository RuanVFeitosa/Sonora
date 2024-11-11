import React, { useEffect, useState } from 'react';
import Slider from '@react-native-community/slider';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import seta from '../../assets/seta-e.png';
import options from '../../assets/options.png';
import slipknot from '../../assets/slipknot.jpg'; 

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // duração em segundos (3 minutos)

  // Simula o avanço do tempo
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prevTime => (prevTime < duration ? prevTime + 1 : prevTime));
      }, 1000);
    } else if (!isPlaying && currentTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.opcao}>
        <Text style={styles.title}>PLAYING FROM PLAYLIST</Text>
        <Text style={styles.subtitle}>Gym Cat</Text>
        <Image source={options} />
      </View>

      <View style={styles.titleContainer}>
        <Image style={styles.playlist} source={slipknot} />
        <Text style={styles.name}>Custer</Text>
        <Text style={styles.artist}>Slipknot</Text>
      </View>

      <View style={styles.progressBarContainer}>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          onValueChange={setCurrentTime}
          minimumTrackTintColor="#1DB954"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#1DB954"
        />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{formatTime(currentTime)}</Text>
          <Text style={styles.time}>{formatTime(duration)}</Text>
        </View>
      </View>

      <View style={styles.controlsContainer}>
        <TouchableOpacity>
          <Icon name="play-skip-back-outline" size={40} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePlayPause}>
          <Icon name={isPlaying ? "pause-circle-outline" : "play-circle-outline"} size={80} color="#1DB954" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="play-skip-forward-outline" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#000000',
  },
  titleContainer: {
    flex: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  opcao: {
    padding: 25,
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  playlist: {
    width: 263,
    height: 252,
    borderRadius: 30,
  },

  title: {
    fontSize: 24,
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: '#06A0B5',
  },

  name: {
    fontSize:24,
    color: 'white'
  },

  artist: {
    fontSize: 14,
    color: 'grey',
    marginTop: 10,
  },

  //----------------------------------------------------- Reprodution ----------------------------------------------------

  progressBarContainer: {
    width: '80%',
    alignSelf: 'center',
  },

  progressBar: {
    height: 40,
  },

  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  time: {
    fontSize: 12,
    color: '#888',
  },
  
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    marginTop: 20,
  },
});
