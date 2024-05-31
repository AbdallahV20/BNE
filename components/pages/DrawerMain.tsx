import React, { useContext } from 'react';
import { DrawerNavigationOptions, DrawerToggleButton, createDrawerNavigator } from '@react-navigation/drawer';
import Main from './Main';
import SettingsContainer from '../organisms/SettingsContainer';
import CustomIcon from '../atoms/CustomIcon';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import WelcomeUser from '../molecules/WelcomeUser';
import { StatusBar, StyleSheet } from 'react-native';
import {View} from 'react-native';
import { ThemeContext } from '../../App';

const WelcomeUserProfile = ()=> <WelcomeUser />;
const BellIcon = ()=>(
  <View style={getStyle().iconPadding}>
    <CustomIcon icon={faBell}/>
  </View>
);
const headerLeft = (theme:string)=> <DrawerToggleButton tintColor={theme === 'dark' ? '#aaa' : 'black'} />;

export default function DrawerMain(): React.JSX.Element {
  const {theme} = useContext(ThemeContext);
  const styles = getStyle(theme);
  const Drawer = createDrawerNavigator();
  const DrawerOptions : DrawerNavigationOptions = {
    headerRight: BellIcon ,
    headerStyle: styles.header,
    headerTitle:WelcomeUserProfile,
    headerLeft:()=> headerLeft(theme),
    drawerStyle: styles.drawerStyle,
  };
  return (
    <>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}  backgroundColor={ theme === 'dark' ? '#121212' : '#f1f3fb'} translucent={false}/>
      <Drawer.Navigator
        screenOptions={DrawerOptions}
        drawerContent={SettingsContainer} >
        <Drawer.Screen name="Main" component={Main} />
      </Drawer.Navigator>
    </>
  );
}


const getStyle = (theme?:string) =>
  StyleSheet.create({
  iconPadding : {
    paddingHorizontal : 17,
  },
  header : {
    elevation:0,
    height:80,
    backgroundColor : theme === 'dark' ? '#121212' : '#F1F3FB',
  },
  drawerStyle : {
    backgroundColor:theme === 'dark' ? '#121212' : '#F1F3FB',
    borderTopRightRadius:40,
    borderBottomRightRadius:40,
    padding:20,
    width:330,
  },
});
