import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../../Styles/Home_Style';
import Menu_Styles from '../../Styles/Menu_Style';
import {MenuTitle, Icon, Menu} from '../../Components/ComponentIndex';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#F04385', '#FF536B']}
        style={Styles.Header_View}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back"
            size={40}
            color="#000"
            style={Menu_Styles.LeftIcon}
          />
        </TouchableOpacity>
        <MenuTitle name="Settings" style={Styles.title} />
        <View style={[Menu_Styles.RightIcon, {width: 20, height: 20}]} />
      </LinearGradient>
      <View style={{backgroundColor: '#FF536B', height: '100%'}}>
        <Text>Setting</Text>
      </View>
    </View>
  );
};

export default Setting;
