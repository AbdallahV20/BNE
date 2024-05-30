import React from 'react';
import { Text,View,Image, StyleSheet } from 'react-native';
import AddButton from '../atoms/AddButton';
const EmptyList = ({img,title,subTitle,add}:any)=>
    <View style={styles.container}>
        <Image source={img}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        {add && <AddButton />}
    </View>;

const styles = StyleSheet.create({
    container : {
        marginVertical:100,
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        fontSize:16,
        fontWeight:'bold',
        color:'black',
        marginTop:15,
    },
    subTitle : {
        color:'#464665',
        textAlign:'center',
        marginBottom:15,
        marginTop:5,
    },

});
export default EmptyList;
