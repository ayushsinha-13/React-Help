import { View } from 'react-native'
import Styles from '../Styles/Home_Style'
import Menu_Styles from '../Styles/Menu_Style'
import LinearGradient from 'react-native-linear-gradient'
import { MenuIcon,MenuTitle } from '../Components/ComponentIndex'

const ComponentScreen = (props) => {
  const {name,description} = props.route.params
  return (
    <View style={Styles.Master_View}>
      <LinearGradient colors={['#9ee7ff', '#cff3ff']} style={Styles.Header_View}>
        <MenuIcon name="arrow-back" style={Menu_Styles.LeftIcon}/> 
        <MenuTitle name={name} style={Styles.title}/>
        <MenuIcon name="grid" style={Menu_Styles.RightIcon}/>
      </LinearGradient>
    </View>
  )
}

export default ComponentScreen