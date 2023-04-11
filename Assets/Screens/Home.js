import {View, Text} from 'react-native'
import Styles from '../Styles/Home_Style'
import Menu_Styles from '../Styles/Menu_Style'
import { GIF_BORDER_BACKGROUND } from '../Constants'
import LinearGradient from 'react-native-linear-gradient'
import Carousal_Components from '../Data/Carousal_Components'
import {FlatList, ScrollView} from 'react-native-gesture-handler'
import {MenuIcon,Category,MenuTitle,DesignHomeBottom,ComingSoon,OptionCard} from '../Components/ComponentIndex'

const Home = ({navigation}) => {
  return (
      <View style={Styles.Master_View}>
      <LinearGradient colors={['#9ee7ff', '#cff3ff']} style={Styles.Header_View}>
        <MenuIcon name="notifications" style={Menu_Styles.LeftIcon}/> 
        <MenuTitle name="React Help" style={Styles.title}/>
        <MenuIcon name="grid" style={Menu_Styles.RightIcon}/>
      </LinearGradient>

      <ScrollView >
        <View style={Styles.GuestView}>
          <Text style={Styles.GuestText}>Hello, Guest</Text>
          <Text style={Styles.GuestSubText}> Let's Start Learning </Text>
        </View>

        <LinearGradient colors={['#cff3ff','#ffffff']} style={Styles.CardGradient}>
          <OptionCard imageLocation={require("../Images/DONATE_1.png")} />
          <OptionCard imageLocation={require("../Images/DONATE_2.png")} />
        </LinearGradient>

        <View style={Styles.Category_View}>
          <FlatList
            data={Carousal_Components}
            renderItem={({item}) => <Category name={item.name} callAction={navigation} destination={item.name}/>}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>

        <LinearGradient colors={['#ffffff', GIF_BORDER_BACKGROUND]} style={Styles.ComingSoonGradient}>
          <ComingSoon />
        </LinearGradient>

        <DesignHomeBottom />
      </ScrollView>
    </View>
  );
};



export default Home;
