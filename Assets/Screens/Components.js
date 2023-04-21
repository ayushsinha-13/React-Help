import {View, TouchableOpacity} from 'react-native';
import Styles from '../Styles/Home_Style';
import Menu_Styles from '../Styles/Menu_Style';
import LinearGradient from 'react-native-linear-gradient';
import {MenuIcon, MenuTitle} from '../Components/ComponentIndex';
import {useNavigation} from '@react-navigation/native';
import {Setup, Example} from '../Components/Learn/LearnIndex';

const TempScreen = props => {
  if (props.name === 'Setup') {
    return <Setup />;
  } else {
    return <Example />;
  }
};

const Components = props => {
  const {name} = props.route.params;
  const navigation = useNavigation();

  return (
    <View style={Styles.Master_View}>
      <LinearGradient
        colors={['#9ee7ff', '#cff3ff']}
        style={Styles.Header_View}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <MenuIcon name="arrow-back" style={Menu_Styles.LeftIcon} />
        </TouchableOpacity>
        <MenuTitle name={name} style={Styles.title} />
        <MenuIcon name="grid" style={Menu_Styles.RightIcon} />
      </LinearGradient>
      <TempScreen name={name} />
    </View>
  );
};

export default Components;
