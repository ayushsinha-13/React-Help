import {View, TouchableOpacity} from 'react-native';
import Styles from '../Styles/Home_Style';
import Menu_Styles from '../Styles/Menu_Style';
import LinearGradient from 'react-native-linear-gradient';
import { MenuTitle, Icon} from '../Components/ComponentIndex';
import {useNavigation} from '@react-navigation/native';
import {Setup, Example, Basic} from '../Components/Learn/LearnIndex';

const TempScreen = props => {
  if (props.name === 'Setup') {
    return <Setup />;
  } else if (props.name == 'Basic') {
    return <Basic />;
  } else {
    return <Example />;
  }
};

const Components = props => {
  const {name} = props.route.params;
  const navigation = useNavigation();

  return (
    <View style={Styles.Master_View}>
      <LinearGradient colors={['#F04385', '#FF536B']} style={Styles.Header_View}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={40} color="#000" style={Menu_Styles.LeftIcon} />
        </TouchableOpacity>
        <MenuTitle name={name} style={Styles.title} />
        <Icon name="grid" size={35} color="#000" style={Menu_Styles.RightIcon} />
      </LinearGradient>
      <TempScreen name={name} />
    </View>
  );
};

export default Components;
