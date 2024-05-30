/* eslint-disable react/no-unstable-nested-components */
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  faHouse, faLocationDot, faPeopleGroup, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Home from './Home/Home';
import Transfer from './Transfer/Transfer';
import Beneficiaries from './Beneficiaries/Beneficiaries';
import ATMs from './ATMs/ATMs';
import Icon from '../atoms/TabBarIcon';
import { ThemeContext } from '../../App';
type BottomTabParamList = {
  Home: undefined;
  Transfer: undefined;
  Beneficiaries: undefined;
  ATMs: undefined;
  AirPay: undefined;
};


const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function Main(): React.JSX.Element {
  const {theme} = useContext(ThemeContext);
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveBackgroundColor: '#007236',
      tabBarInactiveTintColor: '#B7B7B7',
      tabBarActiveTintColor: 'white',
      tabBarItemStyle: {
        borderRadius: 16,
        padding:5,
        marginHorizontal: 10,
        marginVertical: 5,
      },
      tabBarStyle: {
        borderTopWidth:0,
        height: 70,
        backgroundColor:theme === 'dark' ? '#222' : '#f1f3f5',
      },
      headerShown: false,
      tabBarShowLabel:false,
    }} >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Icon color={color} label="Home" icon={faHouse}/>,
        }}
      />
      <Tab.Screen
        name="Transfer"
        component={Transfer}
        options={{
          tabBarIcon: ({ color }) => <Icon color={color} label="Transfer" icon={faPaperPlane}/>,
        }}
      />
      <Tab.Screen
        name="Beneficiaries"
        component={Beneficiaries}
        options={{
          tabBarIcon: ({ color }) => <Icon color={color} label="Beneficiaries" icon={faPeopleGroup}/>,
        }}
      />
      <Tab.Screen
        name="ATMs"
        component={ATMs}
        options={{
          tabBarIcon: ({ color }) => <Icon color={color} label="ATMs" icon={faLocationDot}/>,
        }}
      />
    </Tab.Navigator>
  );
}



