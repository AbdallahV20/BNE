/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View,Text,StyleSheet, useWindowDimensions } from 'react-native';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import FingerPrint from '../atoms/FingerPrint';
import {useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomButton from '../atoms/CustomButton';
import LoginInput from '../atoms/LoginInput';
import RememberAndForget from '../molecules/RememberAndForget';
import { ScrollView } from 'react-native';
import { RootStackParamList } from '../../App';
import { AuthStackParamList } from '../pages/Auth/Auth';
import LoginFooter from '../molecules/LoginFooter';
export default function LoginForm() {
    const windowWidth = useWindowDimensions().width;
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList & RootStackParamList>>();
    const [usename,setusename] = useState('');
    const [password,setpassword] = useState('');
    const [showErr,setShowErr] = useState(false);
    const [showPass,setShowPass] = useState(true);


    function clearInputs() {
      setusename('');
      setpassword('');
      setShowErr(false);
    }

    function handleLogin() {
      if(usename !== '' && password !== '')
      {
        navigation.navigate('DrawerMain');
        clearInputs();
      }
      else
      {setShowErr(true);}
    }

    function handleSignUp() {
      navigation.navigate('signup');
      clearInputs();
    }
    return (
        <ScrollView contentContainerStyle={{justifyContent:'space-between',flexGrow:1}} showsVerticalScrollIndicator={false}>
            <View>
              <Text style={[styles.title,{fontSize:windowWidth > 410 ? 40 : 35}]}>Welcome to The National Bank of Egypt</Text>
            </View>
            <View>
              <LoginInput value={usename} label="Username" icon={faAt} handleChange={(value)=>setusename(value)} />
              <LoginInput value={password} label="Password" icon={faLock} handleChange={(value)=>setpassword(value)} password showPass={showPass} handleShowPass={()=>setShowPass(!showPass)} />
              <RememberAndForget />
              {showErr && <Text style={styles.errMsg}>Incorrect Username or Password</Text>}
              <View style={styles.fintgerAndLoginContainer}>
                  <View style={styles.logInContainer}>
                    <CustomButton title="Log In" color="#007236" pressFunction={handleLogin} />
                  </View>
                  <FingerPrint size={28} padding={12}/>
              </View>
              <Text style={styles.signUpContainer}>Don't have an account? <Text style={styles.signup} onPress={handleSignUp}>SignUp</Text></Text>
              <LoginFooter />
          </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
      title : {
        color:'#fff',
        fontWeight:'bold',
      },
      errMsg : {
        fontWeight:'bold',
        color:'red',
        marginBottom:10,
        marginStart:5,
      },
      button: {
        flexDirection:'row',
        alignItems: 'center',
      },
      checkbox: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius:9,
        padding:4,
      },
      checked: {
        backgroundColor: 'white',
      },
      fintgerAndLoginContainer : {
        flexDirection:'row',
        columnGap:20,
        alignItems:'center',
      },
      login : {
        backgroundColor : '#007236',
        borderRadius:13,
        justifyContent:'center',
        alignItems:'center',
        padding:18,
      },
      logInContainer : {
        flex:1,
      },
      textLogin : {
        fontWeight:'bold',
        color:'white',
        fontSize:16,
      },
      signUpContainer: {
        marginTop:10,
        marginBottom:20,
        textAlign:'center',
        color:'white',
      },
      signup : {
        fontWeight:'bold',
        marginTop:30,
        color:'#F6A721',
        textAlign:'center',
        textDecorationLine:'underline',
      },
});
