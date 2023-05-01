import {View, TouchableOpacity, Modal} from 'react-native';
import Styles from '../Styles/Home_Style';
import Menu_Styles from '../Styles/Menu_Style';
import LinearGradient from 'react-native-linear-gradient';
import {MenuTitle, Icon, Menu} from '../Components/ComponentIndex';
import {useNavigation} from '@react-navigation/native';
import {Setup, Example, Basic, Component} from '../Components/Learn/LearnIndex';
import {useState} from 'react';

const TempScreen = props => {
  if (props.name === 'Setup') {
    return <Setup />;
  } else if (props.name === 'Basic') {
    return <Basic />;
  } else if (props.name === 'Components') {
    return <Component />;
  } else {
    return <Example />;
  }
};

const Components = props => {
  const {name} = props.route.params;
  const navigation = useNavigation();

  const [opacBack, setOpacBack] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const changeModal = bool => {
    setModalVisible(bool);
    modalVisible ? setOpacBack(1) : setOpacBack(0.3);
  };

  return (
    <>
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => changeModal(false)}>
        <View style={{flex: 1, height: '100%', width: '100%'}}>
          <View style={{flexDirection: 'row-reverse'}}>
            <TouchableOpacity
              onPress={() => changeModal(true)}
              style={{paddingRight: 30, paddingTop: 30, elevation: 8}}>
              <Icon name="close" size={60} color="#fff" />
            </TouchableOpacity>
          </View>
          <Menu changeModal={changeModal} />
        </View>
      </Modal>

      <View
        style={{
          flex: 1,
          position: 'absolute',
          backgroundColor: 'black',
          height: '100%',
          width: '100%',
        }}
      />
      <View style={[Styles.Master_View, {opacity: opacBack}]}>
        <LinearGradient
          colors={['#F04385', '#FF536B']}
          style={Styles.Header_View}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon
              name="arrow-back"
              size={40}
              color="#000"
              style={Menu_Styles.LeftIcon}
            />
          </TouchableOpacity>
          <MenuTitle name={name} style={Styles.title} />
          <TouchableOpacity onPress={() => changeModal(true)}>
            <Icon
              name="grid"
              size={35}
              color="#000"
              style={Menu_Styles.RightIcon}
            />
          </TouchableOpacity>
        </LinearGradient>
        <TempScreen name={name} />
      </View>
    </>
  );
};

export default Components;
