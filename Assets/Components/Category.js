import { View, Text ,TouchableOpacity } from 'react-native'
import Styles from '../Styles/Home_Style'

const Category = ({name,callAction,description}) => {
  return (
    <TouchableOpacity onPress={()=>callAction.navigate("ComponentScreen",{name,description})}>
      <View style={Styles.CategoryComponent}>
        <Text style={Styles.CategoryText}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Category