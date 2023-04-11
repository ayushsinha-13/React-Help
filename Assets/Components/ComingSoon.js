import { View, Text } from 'react-native'
import Styles from '../Styles/Home_Style'
import { Icon } from './Icon'

const ComingSoon = () => {
  return (
    <View style={Styles.ComingSoonView}>
        <Text style={Styles.ComingSoonText}>More feature coming soon, Stay tuned..</Text>
        <Icon name="hourglass-outline" size={60} color="purple" style=""/>
    </View>
  )
}

export default ComingSoon