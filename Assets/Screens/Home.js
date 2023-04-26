import {View, Text, TouchableOpacity, Modal} from 'react-native';
import Styles from '../Styles/Home_Style';
import Menu_Styles from '../Styles/Menu_Style';
import {GIF_BORDER_BACKGROUND} from '../Constants';
import LinearGradient from 'react-native-linear-gradient';
import {Carousal_Components} from '../Data/DataIndex';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {
  MenuIcon,
  Category,
  MenuTitle,
  DesignHomeBottom,
  ComingSoon,
  OptionCard,
  Icon,
} from '../Components/ComponentIndex';
import {useState} from 'react';

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [opa, setOpa] = useState(1);

  const setA = () => {
    setModalVisible(!modalVisible);
    modalVisible ? setOpa(1) : setOpa(0.3);
  };

  return (
    // Here I've removed masterView from style of parent view
    <View>
      <Modal transparent={true} animationType="fade" visible={modalVisible}>
        <View style={{flex: 1, height: '100%', width: '100%'}}>
          <View style={{flexDirection: 'row-reverse'}}>
            <TouchableOpacity
              onPress={() => setA()}
              style={{paddingRight: 30, paddingTop: 30, elevation: 8}}>
              <Icon name="close" size={60} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                width: '80%',
                backgroundColor: '#fff',
                marginTop: 170,
                borderRadius: 30,
                paddingHorizontal: 30,
                paddingVertical: 50,
                elevation: 8,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={{alignItems:"center"}}>
                  <View
                    style={{
                      backgroundColor: '#FF536B',
                      height: 85,
                      width: 85,
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      elevation: 2,
                    }}>
                    <Icon name="color-wand" size={40} />
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{color: 'black',fontWeight:"900",fontSize:15,marginTop:5}}>Animations</Text>
                  </View>
                </View>
                <View style={{alignItems:"center"}}>
                  <View
                    style={{
                      backgroundColor: '#FF536B',
                      height: 85,
                      width: 85,
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      elevation: 2,
                    }}>
                    <Icon name="color-palette" size={40} />
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{color: 'black',fontWeight:"900",fontSize:15,marginTop:5}}>Color Palette</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: 20,
                }}>
                <View>
                  <View
                    style={{
                      backgroundColor: '#FF536B',
                      height: 85,
                      width: 85,
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      elevation: 2,
                    }}>
                    <Icon name="desktop" size={40} />
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{color: 'black',fontWeight:"900",fontSize:15,marginTop:5}}>Examples</Text>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      backgroundColor: '#FF536B',
                      height: 85,
                      width: 85,
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      elevation: 2,
                    }}>
                    <Icon name="cog" size={40} />
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{color: 'black',fontWeight:"900",fontSize:15,marginTop:5}}>Setting</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
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
      <LinearGradient
        colors={['#9ee7ff', '#cff3ff']}
        style={[Styles.Header_View, {opacity: opa}]}>
        <Icon name="cog" size={40} color="#000" style={Menu_Styles.LeftIcon} />
        <MenuTitle name="Code Native" style={Styles.title} />
        <TouchableOpacity onPress={() => setA()}>
          <MenuIcon name="grid" style={Menu_Styles.RightIcon} />
        </TouchableOpacity>
      </LinearGradient>

      <ScrollView style={{opacity: opa}}>
        <View style={Styles.GuestView}>
          <Text style={Styles.GuestText}>Hello, Guest</Text>
          <Text style={Styles.GuestSubText}> Let's Start Learning </Text>
        </View>

        <LinearGradient
          colors={['#cff3ff', '#ffffff']}
          style={Styles.CardGradient}>
          <OptionCard
            imageLocation={require('../Images/DONATE_1.png')}
            id={1}
          />
          <OptionCard
            imageLocation={require('../Images/DONATE_2.png')}
            id={2}
          />
        </LinearGradient>

        <View style={Styles.Category_View}>
          <FlatList
            data={Carousal_Components}
            renderItem={({item}) => (
              <Category
                id={item.id}
                name={item.name}
                iconName = {item.iconName}
                callAction={navigation}
                destination={item.name}
              />
            )}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>

        <LinearGradient
          colors={['#ffffff', GIF_BORDER_BACKGROUND]}
          style={Styles.ComingSoonGradient}>
          <ComingSoon />
        </LinearGradient>

        <DesignHomeBottom />
      </ScrollView>
    </View>
  );
};

export default Home;
