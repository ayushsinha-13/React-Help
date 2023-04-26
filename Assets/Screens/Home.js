import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  RefreshControl,
} from 'react-native';
import Styles from '../Styles/Home_Style';
import Menu_Styles from '../Styles/Menu_Style';
import {GIF_BORDER_BACKGROUND, version} from '../Constants';
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
import {useState, useEffect, useCallback} from 'react';
import GetUpdate from '../Functions/GetUpdate';

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [myData, setMyData] = useState(null);
  const [opa, setOpa] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    setTimeout(() => {
      setRefreshing(false);
    }, 150);
  }, []);

  const UpdateNotification = () => {
    setUpdateModalVisible(!updateModalVisible);
    updateModalVisible ? setOpa(1) : setOpa(0.3);
  };

  const setA = () => {
    setModalVisible(!modalVisible);
    modalVisible ? setOpa(1) : setOpa(0.3);
  };

  const getData = async () => {
    const temp = await GetUpdate();
    setMyData(temp.updates);
  };

  const CheckVersion = ({id, title, desc}) => {
    return (
      <View
        style={{
          backgroundColor: '#FF536B',
          padding: 10,
          borderRadius: 20,
          elevation: 8,
          marginBottom: 30,
        }}>
        <Text style={{color: 'black',fontSize: 20, fontWeight: '600'}}> {title}</Text>
        <Text style={{fontSize: 18}}>{desc}</Text>
      </View>
    );
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
                <View style={{alignItems: 'center'}}>
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
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '900',
                        fontSize: 15,
                        marginTop: 5,
                      }}>
                      Animations
                    </Text>
                  </View>
                </View>
                <View style={{alignItems: 'center'}}>
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
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '900',
                        fontSize: 15,
                        marginTop: 5,
                      }}>
                      Color Palette
                    </Text>
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
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '900',
                        fontSize: 15,
                        marginTop: 5,
                      }}>
                      Examples
                    </Text>
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
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '900',
                        fontSize: 15,
                        marginTop: 5,
                      }}>
                      Setting
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        animationType="fade"
        visible={updateModalVisible}>
        <View style={{flex: 1, height: '100%', width: '100%'}}>
          <View style={{flexDirection: 'row-reverse'}}>
            <TouchableOpacity
              onPress={() => UpdateNotification()}
              style={{paddingRight: 30, paddingTop: 30, elevation: 8}}>
              <Icon name="close" size={60} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                marginTop: 20,
                borderRadius: 50,
                paddingHorizontal: 10,
                paddingVertical: 40,
                elevation: 8,
              }}>
             
              <View>
                <FlatList
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                  data={myData}
                  renderItem={({item}) => (
                    <CheckVersion
                      id={item.id}
                      title={item.title}
                      desc={item.desc}
                    />
                  )}
                  keyExtractor={item => item.id}
                />
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
        <TouchableOpacity onPress={() => UpdateNotification()}>
          <Icon
            name="notifications"
            size={35}
            color="#000"
            style={Menu_Styles.LeftIcon}
          />
        </TouchableOpacity>
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
                iconName={item.iconName}
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
