/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View,Text, StyleSheet, ImageSourcePropType } from 'react-native';
import { Image } from 'react-native';
import { ThemeContext } from '../../App';

type Props = {
    name : string,
    date : string,
    money:string,
    img? : ImageSourcePropType,
    id : number,
    length : number,
}

export default function History({name,date,money,img,id,length}:Props) {
    const {theme} = useContext(ThemeContext);
    return (
        <View style={[styles.container,{borderBottomWidth:id === length ? 0 : 1}]}>
            <View style={styles.container}>
                {img && <Image style={styles.image} source={img}/>}
                <View >
                    <Text style={[styles.name,{color : theme === 'dark' ? '#b7b7b7' : 'black'}]}>{name}</Text>
                    <Text style={{color :'#b7b7b7'}}>{date}</Text>
                </View>
            </View>
            <Text style={[styles.money,{color : theme === 'dark' ? '#b7b7b7' : 'black'}]}>{money}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#B7B7B773',
        paddingVertical:12,
    },
    image : {
        resizeMode:'cover',
        width:55,
        height:55,
        borderRadius:10,
        marginEnd:10,
    },
    name : {
        fontSize:18,
        marginBottom:3,
    },
    money : {
        fontSize:18,
        fontWeight:'bold',
        color:'black',
    },
});
