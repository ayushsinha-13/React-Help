import {StyleSheet} from 'react-native';
import {GIF_BORDER_BACKGROUND} from '../Constants';

const Styles = StyleSheet.create({
  Master_View: {
    flex: 1,
    backgroundColor: '#FF536B',
  },
  Header_View: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    color: '#1F2731',
    fontFamily: 'Roboto-Bold',
    paddingTop: 10,
  },
  GuestView: {
    backgroundColor: '#cff3ff',
    paddingTop: 10,
    paddingLeft: 20,
  },
  GuestText: {
    fontSize: 30,
    paddingLeft: 6,
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  GuestSubText: {
    fontSize: 20,
    fontFamily: 'Poppins-ExtraLight',
    color: 'black',
  },
  CardGradient: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  Category_View: {
    paddingTop: 10,
    backgroundColor: '#ffffff',
  },
  CategoryComponent: {
    borderRadius: 39,
    height: 80,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    elevation: 2,
  },
  CategoryText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 10,
    color: 'white',
  },
  ComingSoonGradient: {
    paddingTop: 20,
    height: 310,
  },
  ComingSoonView: {
    alignItems: 'center',
  },
  ComingSoonText: {
    color: '#585858',
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 45,
  },
  Image_Scroll: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  item: {
    padding: 10,
  },
  DesignImage: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: GIF_BORDER_BACKGROUND,
  },
  DesignView: {
    paddingLeft: 10,
    paddingBottom: 20,
    backgroundColor: GIF_BORDER_BACKGROUND,
  },
  DesignTextMain: {
    color: '#585858',
    fontSize: 45,
    fontFamily: 'Poppins-ExtraBold',
  },
  DesignTextSubtitle: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
});

export default Styles;
