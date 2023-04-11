import { View, Text, Image } from 'react-native'
import Styles from '../Styles/Home_Style'
import ImageStyle from '../Styles/Image_Styles'

const DesignHomeBottom = () => {
  return (
    <View>
        <View style={Styles.DesignImage}>
          <Image source={require('../Images/EAT_SLEEP_LEARN_REPEAT.gif')} style={ImageStyle.DesignImage}/>
        </View>
    <View style={Styles.DesignView}>
        <Text style={Styles.DesignTextMain}>CODE IT UP !!</Text>
        <Text style={Styles.DesignTextSubtitle}>Made with ♥️ in Mohali, India</Text>
    </View>
    </View>
  )
}

export default DesignHomeBottom