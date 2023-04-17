import { Animated,View , Image, TouchableOpacity } from 'react-native'
import ShowToast from '../Functions/ShowToast'
import { DONATE_IMAGE_SIZE } from '../Constants'

const BUTTON_PRESS_ANIMATION1 = new Animated.ValueXY({x: 1, y: 0});
const BUTTON_PRESS_ANIMATION2 = new Animated.ValueXY({x: 1, y: 0});

const OptionCard = (props) => {
  if(props.id === 1){
    return (
      <Animated.View style={{transform: [{scale: BUTTON_PRESS_ANIMATION1.x}]}}>
          <TouchableOpacity onPress={()=>ShowToast({animation: BUTTON_PRESS_ANIMATION1})}>
              <Image source={props.imageLocation} style={{height: DONATE_IMAGE_SIZE, width: DONATE_IMAGE_SIZE, borderRadius: 20, margin: 10}}/>
          </TouchableOpacity>
      </Animated.View>
    )
  }else if(props.id === 2){
    return (
      <Animated.View style={{transform: [{scale: BUTTON_PRESS_ANIMATION2.x}]}}>
          <TouchableOpacity onPress={()=>ShowToast({animation: BUTTON_PRESS_ANIMATION2})}>
              <Image source={props.imageLocation} style={{height: DONATE_IMAGE_SIZE, width: DONATE_IMAGE_SIZE, borderRadius: 20, margin: 10}}/>
          </TouchableOpacity>
      </Animated.View>
    )
  }
}

export default OptionCard