import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList, StatusBar, SafeAreaView, SectionList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import profile from '../../assets/Profile.png';
import notify from '../../assets/notify.png';
import settings from '../../assets/settings.png';
import c1 from '../../assets/c1.png'

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export default function Home(props) {
  const { title = 'Enter' } = props;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#06A0B5', '#102B2D', 'black']}
        style={{ height: '100%', width: '100%', flex: 0.2, opacity: 50, }}
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

      <Text style={styles.mix}>Your Top Mixes</Text>

      <View style={styles.container}>
        <StatusBar style="light" />
        <SafeAreaView style={{ flex: 1 }}>
          <SectionList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={({ section }) => (
              <>
                <Text style={styles.sectionHeader}>{section.title}</Text>
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              </>
            )}
            renderItem={({ item, section }) => {
              return null;
              // return <ListItem item={item} />;
            }}
          />
        </SafeAreaView>
      </View>

    </View>


  );
};

const SECTIONS = [
  {
    title: 'Made for you',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
  {
    title: 'Punk and hardcore',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1011/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/1012/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1013/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1015/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1016/200',
      },
    ],
  },
  {
    title: 'Based on your recent listening',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1020/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/1024/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1027/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1035/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1038/200',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },

  //--------------------------------------------------- Cards ----------------------------------------------------
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
