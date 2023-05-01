import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import {Icon} from './Icon';
import {useNavigation} from '@react-navigation/native';
import Wabble from '../Functions/Buttons/Wabble';

const Menu = props => {
  const navigation = useNavigation();
  const BUTTON_PRESS_ANIMATION1 = new Animated.ValueXY({x: 1, y: 0});
  const BUTTON_PRESS_ANIMATION2 = new Animated.ValueXY({x: 1, y: 0});
  const BUTTON_PRESS_ANIMATION3 = new Animated.ValueXY({x: 1, y: 0});
  const BUTTON_PRESS_ANIMATION4 = new Animated.ValueXY({x: 1, y: 0});

  const handleScreen = (bool, screen) => {
    setTimeout(() => {
      props.changeModal(bool);
      navigation.navigate(screen);
    }, 200);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <View style={Styles.Container}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 30, color: '#000', fontWeight: '900'}}>
            Menu
          </Text>
        </View>
        <View style={Styles.Divider} />
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Animated.View
            style={{
              alignItems: 'center',
              transform: [{scale: BUTTON_PRESS_ANIMATION1.x}],
            }}>
            <TouchableOpacity
              onPress={() => {
                handleScreen(false, 'Animations');
                Wabble({animation: BUTTON_PRESS_ANIMATION1});
              }}
              style={Styles.Back}>
              <View>
                <Icon name="color-wand" size={40} />
              </View>
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <Text style={Styles.Text}>Animations</Text>
            </View>
          </Animated.View>
          <Animated.View
            style={{
              alignItems: 'center',
              transform: [{scale: BUTTON_PRESS_ANIMATION2.x}],
            }}>
            <TouchableOpacity
              onPress={() => {
                Wabble({animation: BUTTON_PRESS_ANIMATION2});
                handleScreen(false, 'ColorPalette');
              }}
              style={Styles.Back}>
              <View>
                <Icon name="color-palette" size={40} />
              </View>
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <Text style={Styles.Text}>Color Palette</Text>
            </View>
          </Animated.View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <Animated.View
            style={{
              alignItems: 'center',
              transform: [{scale: BUTTON_PRESS_ANIMATION3.x}],
            }}>
            <TouchableOpacity
              onPress={() => {
                Wabble({animation: BUTTON_PRESS_ANIMATION3});
                handleScreen(false, 'Examples');
              }}
              style={Styles.Back}>
              <View>
                <Icon name="desktop" size={40} />
              </View>
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <Text style={Styles.Text}>Examples</Text>
            </View>
          </Animated.View>
          <Animated.View
            style={{
              alignItems: 'center',
              transform: [{scale: BUTTON_PRESS_ANIMATION4.x}],
            }}>
            <TouchableOpacity
              onPress={() => {
                Wabble({animation: BUTTON_PRESS_ANIMATION4});
                handleScreen(false, 'Setting');
              }}
              style={Styles.Back}>
              <View>
                <Icon name="cog" size={50} />
              </View>
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <Text style={Styles.Text}>Setting</Text>
            </View>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Menu;

const Styles = StyleSheet.create({
  Container: {
    width: '80%',
    backgroundColor: '#fff',
    marginTop: 80,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
    elevation: 8,
  },
  Divider: {
    borderColor: '#000',
    backgroundColor: '#000',
    borderRadius: 50,
    borderWidth: 2,
    marginVertical: 5,
    marginBottom: 40,
  },
  Back: {
    backgroundColor: '#FF536B',
    height: 85,
    width: 85,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },
  Text: {
    color: 'black',
    fontWeight: '900',
    fontSize: 15,
    marginTop: 5,
  },
});
