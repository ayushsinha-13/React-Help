import { Animated } from 'react-native'

const Wabble = (props) => {
    console.log("Wabble: " + props.animation)
    return(Animated.sequence([
        Animated.timing(props.animation, {
          toValue: {x: 0.95, y: 0},
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.spring(props.animation, {
          toValue: {x: 1.0, y: 0},
          friction: 3,
          tension: 500,
          useNativeDriver: true,
        }),
      ]).start())
}

export default Wabble