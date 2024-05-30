/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { View,Text,StyleSheet ,TextInput} from 'react-native';
import { ThemeContext } from '../../App';


 type Props = {
    value?:string,
    type? : string,
    title:string,
    label:string,
    handleChange? : (v:string) => void
 }
export default function CustomInput({value,type,title,label,handleChange}:Props) {
    const {theme} = useContext(ThemeContext);
    const [focused,setFocused] = useState(false);
    const styles = StyleSheet.create({
        text : {
            fontWeight:'bold',
            color:focused ? '#007236' : theme === 'dark' ? 'white' : 'black',
            marginStart:15,
            marginTop:10,
            fontSize:16,
        },
        inputContainer : {
            backgroundColor : theme === 'dark' ? '#121212' : 'white',
            borderRadius:10,
            marginBottom:20,
            borderWidth:1,
            borderColor:focused ? '#007236' : theme === 'dark' ? '#777' : '#ddd',
        },
        input : {
            marginHorizontal : 15,
            fontSize:16,
        },
    });
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.text} >{label}</Text>
            <TextInput placeholderTextColor={'#b7b7b7'} value={value} keyboardType={type === 'numeric' ? 'numeric' : 'email-address' ? 'email-address' : 'default'} onChangeText={(v)=>handleChange?.(v)} onPress={()=>setFocused(true)} onBlur={()=>setFocused(false)} placeholder={title} style={[styles.input,{color : theme === 'dark' ? 'white' : 'black'}]}  />
        </View>
    );
}



