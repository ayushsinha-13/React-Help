import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Android_Studio_First, Create_AVD} from '../../Constants';

const Setup = () => {
  return (
    <ScrollView>
      {/* Android Studio */}
      <View style={Styles.card}>
        <View>
          <Text style={Styles.headTitle}>React Native CLI</Text>
          <View style={{alignItems: 'center'}}>
            <View style={Styles.titleunderline}></View>
          </View>
        </View>

        <Text style={Styles.detail}>
          If you want full control over your app then you can use React Native
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
            <Text style={{fontSize: 14, color: '#fff'}}>
              {Android_Studio_First}
            </Text>
          </View>
        </View>
        <Text style={Styles.title}>Create Android Virtual Device</Text>
        <View style={Styles.codeBox}>
          <View>
            <Text style={{fontSize: 14, color: '#fff'}}>{Create_AVD}</Text>
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
            <Text style={{fontSize: 14, color: '#fff'}}>
              npx react-native run-android
            </Text>
          </View>
        </View>
      </View>
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
            <Text style={{fontSize: 14, color: '#fff'}}>
              npx create-expo-app AwesomeProject
            </Text>
          </View>

          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Text style={{color: 'yellow', fontSize: 14}}>cd </Text>
            <Text style={{fontSize: 14, color: '#fff'}}>AwesomeProject</Text>
          </View>
          <Text style={{fontSize: 14, color: '#fff'}}>npx expo start</Text>
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
            <Text style={{fontSize: 14, color: '#fff'}}>
              yarn create-expo-app AwesomeProject
            </Text>
          </View>

          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Text style={{color: 'yellow', fontSize: 14}}>cd </Text>
            <Text style={{fontSize: 14, color: '#fff'}}>AwesomeProject</Text>
          </View>
          <Text style={{fontSize: 14, color: '#fff'}}>yarn expo start</Text>
        </View>
      </View>
      <View style={{marginBottom: 40}} />
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  headTitle: {
    color: '#000',
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    marginLeft: 20,
  },
  title: {
    color: '#fff',
    marginTop: 30,
    fontWeight: '700',
    fontSize: 22,
    backgroundColor: '#416165',
    padding: 5,
    paddingLeft: 20,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  detail: {
    color: '#000',
    marginTop: 20,
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
    marginHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    marginTop: 30,
    paddingVertical: 20,
    borderRadius: 30,
    marginHorizontal: 15,
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
    fontSize: 18,
    fontWeight: '600',
  },
  dependencySub: {
    color: 'pink',
    fontSize: 14,
    marginTop: 10,
    fontWeight: '300',
  },
});

export default Setup;
