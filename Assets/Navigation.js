import {createStackNavigator} from '@react-navigation/stack';
import {HeaderStyleInterpolators} from '@react-navigation/stack';
import {Home,About,Components} from './Screens/ScreenIndex'

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'About',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="Components"
        component={Components}
        options={{
          headerShown: false,
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
