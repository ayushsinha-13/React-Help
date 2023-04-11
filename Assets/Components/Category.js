import { View, Text ,TouchableOpacity } from 'react-native'
import Styles from '../Styles/Home_Style'

const Category = ({name,callAction,destination}) => {
  return (
    <TouchableOpacity onPress={()=>callAction.navigate(destination)}>
      <View style={Styles.CategoryComponent}>
        <Text style={Styles.CategoryText}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Category