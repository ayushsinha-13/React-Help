import { View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const MenuIcon = (props) => {
  return (
    <View>
            <Ionicons name={props.name} size={30} color="black" style={props.style} />
    </View> 
  )
}

const Icon = (props) => {
  return(
    <Ionicons name={props.name} size={props.size} color={props.color} style={props.style}/>
  )
}

export {Icon,MenuIcon}