/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons';

const BellIcon = ()=>(
  <View style={styles.iconPadding}>
    <CustomIcon icon={faBell}/>
  </View>
);
const WelcomeUserProfile = ()=> <WelcomeUser />;

export default function DrawerMain(): React.JSX.Element {
  const Drawer = createDrawerNavigator();
  const {theme} = useContext(ThemeContext);
  const DrawerOptions : DrawerNavigationOptions = {
    headerRight: BellIcon ,
    headerStyle:{
      elevation:0,
      height:80,
      backgroundColor : theme === 'dark' ? '#121212' : '#F1F3FB',
    },
    headerTitle:WelcomeUserProfile,
    headerLeft: () => (
      <DrawerToggleButton tintColor={theme === 'dark' ? '#aaa' : 'black'} />
    ),
    drawerStyle:{
      backgroundColor:theme === 'dark' ? '#121212' : '#F1F3FB',
      borderTopRightRadius:40,
      borderBottomRightRadius:40,
      padding:20,
      width:330,
    },
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

const styles = StyleSheet.create({
  iconPadding : {
    paddingHorizontal : 17,
  },
});
