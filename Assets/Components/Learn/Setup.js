import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {Icon} from '../ComponentIndex';
import React from 'react';

const Setup = () => {
  const Android_Studio_First =
    'First you have to install Android Studio on your system.\n\n Check the following boxes :- \n 1. Android SDK \n 2. Android SDK Platform \n 3. Android Virtual Device';
  const Create_AVD =
    "You have to create an AVD if you don't have any real device to test/develop your app. \n\n Click on this Icon and create AVD ";
  const setCopy = () => {
    s =
      'npx create-expo-app AwesomeProject\n cd AwesomeProject\n npx expo start';
    Clipboard.setString(s);
  };
  return (
    <ScrollView>
      <View style={Styles.card}>
        <View>
          <Text style={Styles.headTitle}>Expo Go Quickstart</Text>
          <View style={{alignItems: 'center'}}>
            <View style={Styles.titleunderline}></View>
          </View>
        </View>

        <Text style={Styles.detail}>
          If you want to get started with Hybrid development quickly and don't
          want to install Android Studio, then you can go with expo. Only con is
          that you will get limited option that are provided with expo only and
          it creates heavy build apk than React Native CLI.
        </Text>

        <View style={Styles.codeBox}>
          <Text style={Styles.dependency}>Dependencies Required</Text>
          <Text style={Styles.dependencySub}>
            Node Js | Expo Library | Expo Go App(installed on phone)
          </Text>
        </View>

        <Text style={Styles.title}>Npm - Create and Run</Text>

        <View style={Styles.codeBox}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 15, color: '#fff'}}>
              npx create-expo-app AwesomeProject
            </Text>
            <TouchableOpacity onPress={() => setCopy}>
              <Icon name="copy" size={30} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Text style={{color: 'yellow', fontSize: 15}}>cd </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>AwesomeProject</Text>
          </View>
          <Text style={{fontSize: 15, color: '#fff'}}>npx expo start</Text>
        </View>

        <Text
          ellipsizeMode="clip"
          numberOfLines={1}
          style={{color: '#000', marginTop: 30}}>
          - - - - - - - - - - - - - - - - - - - - - OR - - - - - - - - - - - - -
          - - - - - - - - -
        </Text>

        <Text style={Styles.title}>Yarn - Create and Run</Text>

        <View style={Styles.codeBox}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 15, color: '#fff'}}>
              yarn create-expo-app AwesomeProject
            </Text>
            <TouchableOpacity
              onPress={() => {
                s =
                  'yarn create-expo-app AwesomeProject\n cd AwesomeProject\n yarn expo start';
                Clipboard.setString(s);
              }}>
              <Icon name="copy" size={30} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Text style={{color: 'yellow', fontSize: 15}}>cd </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>AwesomeProject</Text>
          </View>
          <Text style={{fontSize: 15, color: '#fff'}}>yarn expo start</Text>
        </View>
      </View>

      <View style={Styles.card}>
        <View>
          <Text style={Styles.headTitle}>React Native CLI</Text>
          <View style={{alignItems: 'center'}}>
            <View style={Styles.titleunderline}></View>
          </View>
        </View>

        <Text style={Styles.detail}>
          If you want full controll over your app then you can use React Native
          CLI. It comes with great tools for your development needs. Generating
          production level apk or bundle is much easier than genrating it from
          expo. I recommend to go with React Native CLI.
        </Text>

        <View style={Styles.codeBox}>
          <Text style={Styles.dependency}>Dependencies Required</Text>
          <Text style={Styles.dependencySub}>
            Node Js | Android Studio | JDK
          </Text>
        </View>

        <Text style={Styles.title}>Install Android Studio</Text>

        <View style={Styles.codeBox}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 15, color: '#fff'}}>
              {Android_Studio_First}
            </Text>
          </View>
        </View>
        <Text style={Styles.title}>Create Android Virtual Device</Text>
        <View style={Styles.codeBox}>
          <View>
            <Text style={{fontSize: 15, color: '#fff'}}>{Create_AVD}</Text>
            <Image
              source={require('../../Images/Setup/AVD_Icon.png')}
              style={{height: 150, width: 300, marginTop: 10}}
            />
          </View>
        </View>
        <Text style={Styles.title}>Build and Run the App</Text>
        <View style={Styles.codeBox}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 5,
            }}>
            <Text style={{fontSize: 15, color: '#fff'}}>
              npx react-native run-android
            </Text>
            <TouchableOpacity
              onPress={() =>
                Clipboard.setString('npx react-native run-android')
              }>
              <Icon name="copy" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{marginBottom: 40}} />
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  headTitle: {
    color: '#000',
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    marginLeft: 20,
  },
  title: {
    color: '#fff',
    marginTop: 30,
    fontWeight: '700',
    fontSize: 25,
    backgroundColor: '#111A27',
    padding: 5,
    paddingLeft: 20,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  detail: {
    color: '#000',
    marginTop: 20,
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
    marginHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    marginTop: 40,
    paddingVertical: 20,
    borderRadius: 30,
    marginHorizontal: 10,
    elevation: 8,
  },
  codeBox: {
    backgroundColor: '#36353B',
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  titleunderline: {
    backgroundColor: '#000',
    borderRadius: 100,
    height: 2,
    width: '90%',
    elevation: 8,
  },
  dependency: {
    color: 'yellow',
    fontSize: 20,
    fontWeight: '600',
  },
  dependencySub: {
    color: 'pink',
    fontSize: 15,
    marginTop: 10,
    fontWeight: '300',
  },
});

export default Setup;
