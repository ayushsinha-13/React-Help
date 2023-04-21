import {StyleSheet} from 'react-native';
import { GIF_BORDER_BACKGROUND } from '../Constants';

const ImageStyle = StyleSheet.create({
  DesignImage: {
    width: 300,
    height: 300,
    borderRadius: 30,
    overlayColor: GIF_BORDER_BACKGROUND,
  },
});

export default ImageStyle
