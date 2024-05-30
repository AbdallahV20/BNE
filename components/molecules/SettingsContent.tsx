/* eslint-disable react-native/no-inline-styles */
import SettingComponent from '../atoms/SettingsItem';
import React, { useContext } from 'react';
import { View } from 'react-native';
import {faClipboardList,faCertificate,faMoneyBill,faCreditCard,faCashRegister,faMoon} from '@fortawesome/free-solid-svg-icons';
import { Switch } from 'react-native-gesture-handler';
import { ThemeContext } from '../../App';
export default function Settings() {
    const {theme,setTheme} = useContext(ThemeContext);
    return (
        <View style={{marginTop:33,rowGap:5}}>
            <SettingComponent icon={faClipboardList} text={'Account Summary'} />
            <SettingComponent icon={faCertificate} text={'Open Certificates & Deposits'} />
            <SettingComponent icon={faMoneyBill} text={'Payement Services'} />
            <SettingComponent icon={faCreditCard} text={'Cards Services'} />
            <SettingComponent icon={faCashRegister} text={'Offers'} />
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <SettingComponent icon={faMoon} text={'Dark Mode'} />
                <Switch
                trackColor={{ false: '#767577', true: '#bbb' }}
                thumbColor={theme === 'dark' ? 'green' : '#f4f3f4'}
                style={{marginBottom:8}}
                value={theme === 'dark' ? true : false}
                onValueChange={()=>setTheme((prevState:string) => (prevState === 'dark' ? 'light' : 'dark'))} />
            </View>
        </View>
    );
}
