/* eslint-disable react-native/no-inline-styles */
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { View,Text, StyleSheet, Pressable } from 'react-native';
export default function RememberMe() {
    const [rememberMe, setRememberMe] = useState(false);
    return (
        <Pressable onPress={()=>setRememberMe(!rememberMe)} style={styles.button}>
            <View style={[styles.checkbox, rememberMe ? styles.checked : null]}>
                <FontAwesomeIcon icon={faCheck} size={15} style={rememberMe ? {display:'flex'} : {display:'none'}} />
            </View>
            <Text style={styles.rememberMe}>Remember Me</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
      flexDirection:'row',
      alignItems: 'center',
    },
    checkbox: {
      width: 25,
      height: 25,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius:9,
      padding:4,
    },
    checked: {
      backgroundColor: 'white',
    },
    rememberMe : {
      marginStart:10,
      fontWeight:'bold',
      color:'white',
    },
});
