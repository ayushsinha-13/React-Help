import { View, Text ,TouchableOpacity } from 'react-native'
import Styles from '../Styles/Home_Style'

const Category = ({id,name,callAction}) => {
  return (
    <TouchableOpacity onPress={()=>callAction.navigate("Components",{name,id})}>
      <View style={Styles.CategoryComponent}>
        <Text style={Styles.CategoryText}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Category