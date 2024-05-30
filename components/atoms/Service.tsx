import React, { useContext } from 'react';
import { View,Text, StyleSheet } from 'react-native';
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
    const styles = getStyle(theme,iconBackground);
    return (
    <View>
        <View style={styles.icon}>
            <FontAwesomeIcon color={iconColor} size={30} icon={icon} />
        </View>
        <Text style={styles.text}>{title}</Text>
    </View>
    );
}

const getStyle = (theme:string,iconBackground:string) =>
    StyleSheet.create({
        icon : {
            borderRadius:15,
            padding:18,
            backgroundColor:iconBackground,
            justifyContent:'center',
            alignItems:'center',
        },
        text : {
            color:theme === 'dark' ? '#7b7b7b' : 'black',
            textAlign:'center',
            marginTop:10,
            borderRadius:10,
        },
    });
