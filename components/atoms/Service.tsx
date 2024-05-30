/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View,Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ThemeContext } from '../../App';

type Props = {
    icon : IconProp,
    title : string,
    iconColor : string,
    iconBackground : string,
}

export default function Service({icon,title,iconColor,iconBackground}:Props) {
    const {theme} = useContext(ThemeContext);
    return (
    <View>
        <View style={{borderRadius:15,padding:18,backgroundColor:iconBackground,justifyContent:'center',alignItems:'center'}}>
            <FontAwesomeIcon color={iconColor} size={30} icon={icon} />
        </View>
        <Text style={{color:theme === 'dark' ? '#7b7b7b' : 'black',textAlign:'center',marginTop:10,borderRadius:10}}>{title}</Text>
    </View>
    );
}
