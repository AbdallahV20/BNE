import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { View ,Text, StyleSheet} from 'react-native';
import React from 'react';
type IconProps = {
    color: string;
    label: string;
    icon: IconProp;
  };
const TabBarIcon =  ({ color,label,icon }:IconProps) =>{
    const styles = getStyle(color);
    (
        <View >
            <View style={styles.container}>
                <FontAwesomeIcon icon={icon} size={30} color={color} />
            </View>
            <Text style={styles.text} numberOfLines={1} >{label}</Text>
        </View>
    );
};
const getStyle = (color:string) =>
    StyleSheet.create({
    container : {
        alignItems:'center',
        paddingBottom:3,
    },
    text : {
        textAlign : 'center',
        fontSize:10,
        color:color,
    },
});
export default TabBarIcon;
