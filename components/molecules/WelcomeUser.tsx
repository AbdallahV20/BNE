/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Text,View,Image, StyleSheet } from 'react-native';
import { ThemeContext } from '../../App';
export default function WelcomeUser() : React.JSX.Element {
    const {theme} = useContext(ThemeContext);
    return (
        <View style={styles.container}>
            <Image source={require('../../images/profile.jpg')} style={styles.img} />
            <View>
                <Text style={[styles.welcome,{color : theme === 'dark' ? '#b7b7b7' : 'black'}]}>Welcome</Text>
                <Text style={[styles.name,{color : theme === 'dark' ? '#b7b7b7' : 'black'}]}>Queen Nefertiti</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        columnGap:10,
        alignItems:'center',
    },
    img : {
        borderRadius:15,
        width:50,
        height:50,
        resizeMode:'cover',
    },
    welcome : {
        color:'black',
    },
    name : {
        fontWeight:'bold',
        color:'black',
    },
});
