/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Text,View,StyleSheet } from 'react-native';
import { ThemeContext } from '../../App';

type Props = {
    value?:string,
    title : string,
    choice1: string,
    choice2: string,
    handleChange : (v:string) => void
}
export default function Picker({value,title,choice1,choice2,handleChange}:Props) {
    const {theme} = useContext(ThemeContext);
    return (
        <View style={[styles.inputContainer,{backgroundColor : theme === 'dark' ? '#121212' : 'white',borderColor : theme === 'dark' ? '#777' : '#ddd'}]}>
            <Text style={[styles.text,{color : theme === 'dark' ? 'white' : 'black'}]}>{title}</Text>
            <RNPickerSelect
            value={value}
            onValueChange={(v) => handleChange(v)}
            items={[
                { label: choice1, value: choice1 },
                { label: choice2, value: choice2 },
            ]}
            placeholder={{
                label: 'Select',
                value: null,
            }}
            style={{
                inputAndroid : {color : theme === 'dark' ? 'white' : 'black'},
                inputIOS : {color : theme === 'dark' ? 'white' : 'black'},
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text : {
        fontWeight:'bold',
        marginStart:15,
        marginTop:10,
        fontSize:16,
    },
    inputContainer : {
        borderRadius:10,
        marginBottom:20,
        borderWidth:1,
    },
});
