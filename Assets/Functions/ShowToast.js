import {ToastAndroid} from 'react-native'
import Wabble from './Buttons/Wabble';

const ShowToast = (props) => {
  console.log(props.animation)
    ToastAndroid.show('Coming Soon !!', ToastAndroid.SHORT);
    Wabble({animation: props.animation})
  };

export default ShowToast  