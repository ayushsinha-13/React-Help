import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Icon, MenuTitle} from '../ComponentIndex';
import Styles from '../../Styles/Home_Style';
import Menu_Styles from '../../Styles/Menu_Style';
import {COLORS} from '../../Data/DataIndex';
import {useNavigation} from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';

const ColorPalette = () => {
  const navigation = useNavigation();

  const handleCopy = ({color}) => {
    Clipboard.setString(color);
    ToastAndroid.show('Color copied to the clipboard!', ToastAndroid.SHORT);
  };

  const ColorComponent = ({name, color, text}) => {
    return (
      <TouchableOpacity
        style={{
          elevation: 5,
          backgroundColor: color,
          marginVertical: 17,
          marginHorizontal: 30,
          borderRadius: 10,
          padding: 12,
          alignItems: 'center',
        }}
        onPress={() => handleCopy({color})}>
        <Text style={{color: text, fontSize: 20, fontWeight: '900'}}>
          {name}
        </Text>

        <Text style={{color: text, fontSize: 15, fontWeight: '600'}}>
          {color}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[Styles.Master_View, {backgroundColor: '#fff'}]}>
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
        <MenuTitle name="ColorPalette" style={Styles.title} />
        <View style={[Menu_Styles.RightIcon, {width: 20, height: 20}]} />
      </LinearGradient>
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 30,
          marginBottom: 60,
          backgroundColor: '#f3f3f3',
        }}>
        <FlatList
          data={COLORS}
          renderItem={({item}) => (
            <ColorComponent
              name={item.name}
              color={item.color}
              text={item.text}
            />
          )}
          keyExtractor={item => item.id}
          scrollEnabled={true}
        />
      </View>
    </View>
  );
};

export default ColorPalette;
