/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View,Text,Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { ThemeContext } from '../../App';


type Props = {
    name:string,
    img:ImageSourcePropType
}
export default function Person({name,img}:Props) {
    const {theme} = useContext(ThemeContext);
    return (
        <View style={[styles.card]}>
            <Image style={styles.image} source={img} />
            <Text style={[styles.text,{backgroundColor : theme === 'dark' ? '#383838' : 'white',color : theme === 'dark' ? 'white' : 'black'}]} numberOfLines={1} >{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card : {
        elevation:5,
        shadowColor:'#aaa',
        marginVertical:10,
    },
    image: {
        resizeMode:'cover',
        width:77,
        height:86,
        borderRadius:10,
    },
    text: {
        position:'absolute',
        bottom:0,
        padding:4,
        fontWeight:'bold',
        width:'100%',
        textAlign:'center',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        fontSize:11,
    },
});
