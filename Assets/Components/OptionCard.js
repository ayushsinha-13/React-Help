import { View, Image, TouchableOpacity } from 'react-native'
import ShowToast from '../Functions/ShowToast'
import { DONATE_IMAGE_SIZE } from '../Constants'

const OptionCard = (props) => {
  return (
    <View>
        <TouchableOpacity onPress={()=>ShowToast()}>
            <Image source={props.imageLocation} style={{height: DONATE_IMAGE_SIZE, width: DONATE_IMAGE_SIZE, borderRadius: 20, margin: 10}}/>
        </TouchableOpacity>
    </View>
  )
}

export default OptionCard