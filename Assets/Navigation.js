import {createStackNavigator} from '@react-navigation/stack';
import {HeaderStyleInterpolators} from '@react-navigation/stack';
import {Home, About, Components} from './Screens/ScreenIndex';
import {
  Setting,
  Examples,
  ColorPalette,
  Animations,
} from './Components/Menu/MenuIndex';

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
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={{
          headerShown: false,
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="Animations"
        component={Animations}
        options={{
          headerShown: false,
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="Examples"
        component={Examples}
        options={{
          headerShown: false,
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
