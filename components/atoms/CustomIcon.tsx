/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet ,Text} from 'react-native';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
    icon? : IconProp,
    text? : string,
    background? : string,
    iconColor? :string,
}


export default function CustomIcon({icon,text,background,iconColor}:Props) {
    return (
        <Pressable style={[styles.container,{backgroundColor:background ? background : 'white'}]}>
            {icon && <FontAwesomeIcon style={{transform: background ? '' : [{rotateZ:'20deg'}]}} icon={icon} color={iconColor ? iconColor : 'black'} size={20} />}
            {text && <Text style={styles.text} >{text}</Text>}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container : {
        padding:15,
        borderRadius:16,
    },
    text : {
        fontWeight:'bold',
        color :'#007236',
},
});
