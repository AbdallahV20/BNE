/* eslint-disable react-native/no-inline-styles */

import { View,Text ,StyleSheet} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import CustomButton from '../atoms/CustomButton';
import React, { useContext, useLayoutEffect, useState } from 'react';
import { ThemeContext } from '../../App';
export default function OTPTemplate({actionOnSubmit,codeEntered,setCodeEntered,title,headerShown,number = '01211761967'}:any) {
    const sentCode = '10072';
    const [timer,setTimer] = useState(7);
    const [request,setRequest] = useState(false);
    const {theme} = useContext(ThemeContext);

    const handleTimer = (prev:number,interval:NodeJS.Timeout) => {
        if (prev === 0) {
            setRequest(true);
            clearInterval(interval);
            return 0; // Prevents timer from going negative
        }
        return prev - 1;
    };
    useLayoutEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev)=>handleTimer(prev,interval));
        }, 1000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, [request]); // Empty dependency array means this effect runs only once
    return (
        <View style={[styles.container,{paddingTop: headerShown ? 40 : 0,backgroundColor:theme === 'dark' ? '#121212'  : '#f1f3fb' }]}>
            <View>
                <View style={{marginBottom:20}}>
                <Text style={[styles.title,theme === 'dark' ? {color:'white'} : {color:'black'}]}>{title}</Text>
                <Text style={styles.subTitle}>Enter 5 digit code sent to +2{number}</Text>
                </View>
                <OTPTextInput
                    inputCount={5}
                    autoFocus={true}
                    textInputStyle={[{color: theme === 'dark' ? '#b7b7b7' : 'black',backgroundColor : theme === 'dark' ? '#121212' : 'white'},styles.square]}
                    handleTextChange={code=>code.length !== 5 || code !== sentCode ? setCodeEntered(false) : setCodeEntered(true)}
                />
                <View style={styles.timer}>
                    <Text style={styles.code}>Didn’t receive the code?</Text>
                    {!request && <Text style={styles.requestNew}>Request new one in 00:{timer < 10 ? `0${timer}` : timer}</Text>}
                    {request && <View style={{marginTop:10}}><CustomButton color="#007236" title="Request new one" pressFunction={()=>{setRequest(false); setTimer(7);}}/></View>}
                </View>
            </View>
            <View style={styles.submit}>
                <CustomButton color={`${codeEntered ? '#007236' : '#aaa'}`} title="Submit" pressFunction={actionOnSubmit}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingHorizontal:17,
        flex:1,
        justifyContent:'space-between',
    },
    title: {
        marginBottom:5,
        fontWeight:'bold',
        color:'black',
        fontSize:20,
    },
    subTitle : {
        fontSize:16,
        color:'#b7b7b7',
    },
    ErrMsg :{
      marginTop:5,
      fontSize:16,
      color:'red',
    },
    square : {
      borderRadius:10,
      height:65,
      borderWidth:2,
    },
    timer : {
      marginTop:20,
    },
    code : {
      fontSize:16,
      color:'#b7b7b7',
    },
    requestNew : {
      fontSize:16,
      fontWeight:'bold',
      color:'#b7b7b7',
    },
    submit : {
        marginTop:10,
        marginBottom:5,
    },
});
