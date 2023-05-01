import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Icon} from '../ComponentIndex';
import React from 'react';

const IconButton = props => {
  return (
    <View
      style={{
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 12,
        backgroundColor: 'orange',
        borderRadius: 10,
      }}>
      <Icon name={props.icon} size={25} color="#36353B" />
      <Text style={{color: '#36353B', marginTop: 5, fontWeight: '700'}}>
        {props.name}
      </Text>
    </View>
  );
};

const Basic = () => {
  return (
    <ScrollView>
      <View style={Styles.card}>
        <View>
          <Text style={Styles.headTitle}>Components</Text>
          <View style={{alignItems: 'center'}}>
            <View style={Styles.titleunderline}></View>
          </View>
        </View>

        <Text style={Styles.title}>What is component ?</Text>
        <View style={Styles.codeBox}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 14, color: '#fff'}}>
              Component is nothing but a reusable piece of code. Different types
              of components have different functionality.
              {'\n\n'}
              React Native provides some basic Core Components and with help of
              those components you can create more components.
              {'\n\n'}
              In components modules we'll learn more about components. For this
              tutorial we'll only use Functional Components.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 15,
              paddingHorizontal: 10,
            }}>
            <IconButton icon="easel" name="View" />
            <IconButton icon="text" name="Text" />
            <IconButton icon="image" name="Image" />
            <IconButton icon="tablet-landscape" name="Button" />
          </View>
        </View>
      </View>
      <View style={Styles.card}>
        <View>
          <Text style={Styles.headTitle}>Project Setup</Text>
          <View style={{alignItems: 'center'}}>
            <View style={Styles.titleunderline}></View>
          </View>
        </View>
        <Text style={Styles.title}>Create</Text>

        <View style={Styles.codeBox}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 14, color: '#fff'}}>
              For Creating a project , we have to intialize the project with any
              name that you want.
              {'\n\n'}
              Follow the steps:
              {'\n\n'}
              1. Open terminal / Command Prompt from the location where you want
              to create the project.
              {'\n'}
              2. Run command "npx react-native init first_app"
              {'\n'}
              3. It will create a project folder on same location.
              {'\n'}
              4. In terminal type cd first_app.
              {'\n'}
              5. If VS Code is installed on your system then type "code ."
              (Including dot).
              {'\n'}
              6. You project will open in VS Code.
            </Text>
          </View>
        </View>
      </View>
      <View style={Styles.card}>
        <View>
          <Text style={Styles.headTitle}>Running the App</Text>
          <View style={{alignItems: 'center'}}>
            <View style={Styles.titleunderline}></View>
          </View>
        </View>
        <Text style={Styles.title}>Run (Android)</Text>

        <View style={Styles.codeBox}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 14, color: '#fff'}}>
              For running the app you have to run the command in the terminal.
              {'\n\n'}
              npx react-native run-android
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Basic;

const Styles = StyleSheet.create({
  headTitle: {
    color: '#000',
    fontSize: 25,
    fontWeight: '900',
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
  titleunderline: {
    backgroundColor: '#000',
    borderRadius: 100,
    height: 2,
    width: '90%',
    elevation: 2,
  },
  card: {
    backgroundColor: '#fff',
    marginVertical: 25,
    paddingVertical: 20,
    borderRadius: 30,
    marginHorizontal: 15,
    elevation: 8,
  },
  codeBox: {
    backgroundColor: '#36353B',
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginHorizontal: 10,
  },
});
