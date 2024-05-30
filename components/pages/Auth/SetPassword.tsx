/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView } from 'react-native-safe-area-context';
import {View,Text, StyleSheet} from 'react-native';
import React, { useContext, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import CustomButton from '../../atoms/CustomButton';
import { ScrollView } from 'react-native';
import ValidationContainer from '../../molecules/ValidationContainer';
import SetPasswordInput from '../../atoms/SetPasswordInput';
import { AuthStackParamList } from './Auth';
import { ThemeContext } from '../../../App';
export default function SetPassword() {
    const {theme} = useContext(ThemeContext);
    const [focus1,setFocus1] = useState(false);
    const [value1,setValue1] = useState('');

    const [focus2,setFocus2] = useState(false);
    const [value2,setValue2] = useState('');

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const [equal,setEqual] = useState(false);
    const [validation,setValidation] = useState({
        lower : false,
        upper : false,
        special : false,
        minChars : false,
        number : false,
    });

    function handlePassword(value:string) {
        setValue1(value);
        setValidation(prevValidation => ({
            ...prevValidation,
            lower: /[a-z]/.test(value),
            upper: /[A-Z]/.test(value),
            number: /[0-9]/.test(value),
            special: /[^A-Za-z0-9]/.test(value),
            minChars: value.length >= 8,
        }));
      }

    function handleConfirmPassword(value:string) {
        setValue2(value);
    }

    useLayoutEffect(()=>{
        if(value1 === value2 && Object.values(validation).every(el=>el === true))
            {setEqual(true);}
        else
            {setEqual(false);}
    },[value1,value2,validation]);

    return (
        <SafeAreaView style={[styles.container,{backgroundColor: theme === 'dark' ? '#121212' : '#f1f3fb'}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text  style={[styles.title,theme === 'dark' ? {color:'white'} : {color:'black'}]}>Set Your Password</Text>
                    <Text style={styles.subTitle}>Enter a strong password for your online banking account</Text>
                    <SetPasswordInput label="Password" placeholder="Ex:Akhnaton$7000BC" handleFocus={setFocus1} handlePassword={handlePassword} focus={focus1} />
                    <SetPasswordInput label="Confirm Password" placeholder="Re-write Your Password Here!" handleFocus={setFocus2} handlePassword={handleConfirmPassword} focus={focus2} />
                    <ValidationContainer validation={validation} />
                </View>
                <View style={styles.submit}>
                    <CustomButton title="Submit" pressFunction={()=>equal ? navigation.navigate('Success') : null} color={`${equal ? '#007236' : '#B7B7B7'}`}  />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 17,
        flex:1,
        justifyContent:'space-between',
    },
    title: {
        fontWeight:'bold',
        color:'black',
        fontSize:20,
    },
    subTitle : {
        marginTop:5,
        fontSize:16,
        color:'#b7b7b7',
    },
    submit : {
        marginVertical:25,
    },
});
