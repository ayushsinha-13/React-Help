import { View, Text } from 'react-native'

const MenuTitle = (props) => {
  return (
    <View>
          <Text style={props.style}>{props.name}</Text>
    </View>
  )
}

export default MenuTitle