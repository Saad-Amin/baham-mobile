import { FlatList, ScrollView, StyleSheet, Text, View, SectionList } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { NavigationContainer } from '@react-navigation/native';
import Home from './assets/Screens/home';
import Login from './assets/Screens/login';
import Menu from './assets/Screens/menu';
import About from './assets/Screens/about';
import Settings from './assets/Screens/settings';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.mainContainer}>

        <NavigationContainer>
          <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Menu" component={Menu} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Settings" component={Settings} />
          </Drawer.Navigator>
        </NavigationContainer>

      </View>
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'gold'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  menuItem: {
    textAlign: 'center',
    margin: 12,
    fontSize: 16,
    color: 'maroon'
  }
});