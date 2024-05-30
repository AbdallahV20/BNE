import { Pressable, StyleSheet,Text } from 'react-native';
import React from 'react';

type Props = {
    title : string,
    pressFunction : () => void,
    color:string
}


export default function CustomButton({title,pressFunction,color}:Props) {

    return (
        <Pressable style={[styles.input,{backgroundColor:color}]} onPress={pressFunction}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    input : {
        borderRadius:15,
        padding:16,
        marginBottom:5,
    },
    text : {
        color:'white',
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
    },
});
