import { Animated, Text ,TouchableOpacity } from 'react-native'
import Styles from '../Styles/Home_Style'
import LinearGradient from 'react-native-linear-gradient'
import { Icon } from './Icon'
import Wabble from '../Functions/Buttons/Wabble'

const Category = ({id,name,callAction,iconName}) => {
const BUTTON_PRESS_ANIMATION1 = new Animated.ValueXY({x: 1, y: 0});

const buttonPress = ()=>{
  setTimeout(()=>{
  callAction.navigate("Components",{name,id})   
  },200)
  Wabble({animation: BUTTON_PRESS_ANIMATION1})
}

  return (
    <Animated.View style={{transform: [{scale: BUTTON_PRESS_ANIMATION1.x}]}}>
      <TouchableOpacity onPress={()=>buttonPress()} >
        <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} locations={[0.3,0.7,1]} colors={['#FF536B','#F04385','#D14F93' ]} style={Styles.CategoryComponent} >
        <Icon name={iconName} size={25} style={{alignSelf: "center"}} />
        <Text style={Styles.CategoryText}>{name}</Text>
        </LinearGradient>
    </TouchableOpacity>
    </Animated.View>
  )
}

export default Category