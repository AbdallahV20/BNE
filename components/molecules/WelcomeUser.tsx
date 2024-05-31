import React, { useContext } from 'react';
import { Text,View,Image, StyleSheet } from 'react-native';
import { ThemeContext } from '../../App';
export default function WelcomeUser() : React.JSX.Element {
    const {theme} = useContext(ThemeContext);
    const styles = getStyle(theme);
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/profile.jpg')} style={styles.img} />
            <View>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.name}>Queen Nefertiti</Text>
            </View>
        </View>
    );
}

const getStyle = (theme:string) =>
    StyleSheet.create({
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
        color : theme === 'dark' ? '#b7b7b7' : 'black',
    },
    name : {
        fontWeight:'bold',
        color : theme === 'dark' ? '#b7b7b7' : 'black',
    },
});
