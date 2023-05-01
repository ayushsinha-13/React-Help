import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  RefreshControl,
} from 'react-native';
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
  Menu,
} from '../Components/ComponentIndex';
import {useState, useEffect, useCallback} from 'react';
import GetUpdate from '../Functions/GetUpdate';

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [myData, setMyData] = useState(null);
  const [opacBack, setOpacBack] = useState(1);
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
    updateModalVisible ? setOpacBack(1) : setOpacBack(0.3);
  };

  const changeModal = bool => {
    setModalVisible(bool);
    modalVisible ? setOpacBack(1) : setOpacBack(0.3);
  };

  const getData = async () => {
    const temp = await GetUpdate();
    setMyData(temp.updates);
  };

  const CheckVersion = ({id, title, desc}) => {
    return (
      <View
        style={{
          backgroundColor: '#F04385',
          padding: 20,
          borderRadius: 20,
          marginHorizontal: 20,
          elevation: 8,
          marginBottom: 30,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: '900',
            marginBottom: 10,
          }}>
          {id} {'. '} {title}
        </Text>
        <Text style={{fontSize: 13, color: '#fff'}}>{desc}</Text>
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
              onPress={() => changeModal(false)}
              style={{paddingRight: 30, paddingTop: 30, elevation: 8}}>
              <Icon name="close" size={60} color="#fff" />
            </TouchableOpacity>
          </View>
          <Menu changeModal={changeModal} />
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
                paddingTop: 20,
                paddingHorizontal: 10,
                elevation: 8,
              }}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: '#000', fontWeight: '900'}}>
                  Updates
                </Text>
              </View>
              <View
                style={{
                  borderColor: '#000',
                  backgroundColor: '#000',
                  borderRadius: 50,
                  borderWidth: 2,
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}
              />
              <View style={{marginTop: 20}}>
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
        style={[Styles.Header_View, {opacity: opacBack}]}>
        <TouchableOpacity onPress={() => UpdateNotification()}>
          <Icon
            name="notifications"
            size={35}
            color="#000"
            style={[Menu_Styles.LeftIcon, {marginTop: 12}]}
          />
        </TouchableOpacity>
        <MenuTitle name="Code Native" style={Styles.title} />
        <TouchableOpacity onPress={() => changeModal(true)}>
          <MenuIcon name="grid" style={Menu_Styles.RightIcon} />
        </TouchableOpacity>
      </LinearGradient>

      <ScrollView style={{opacity: opacBack}}>
        <View style={Styles.GuestView}>
          <Text style={Styles.GuestText}>Hello, Coder</Text>
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
