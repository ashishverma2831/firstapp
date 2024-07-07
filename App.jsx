import { NavigationContainer} from '@react-navigation/native';
import StackNavigator from './components/StackNavigator';
import { StyleSheet } from 'react-native';
import BottomTabsNavigator from './components/BottomTabsNavigator';


export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
