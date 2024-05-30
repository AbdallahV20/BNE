import {View,Text,TextInput,TouchableOpacity, StyleSheet} from 'react-native';
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../App';

export default function SetPasswordInput({label,placeholder,focus,handleFocus,handlePassword}:any) : React.JSX.Element {
    const [hidePassword,setHidePassword] = useState(true);
    const {theme} = useContext(ThemeContext);
    const styles = getStyle(theme,focus);
    return (
        <View style={styles.mobileContainer}>
        <Text style={styles.mobile}>{label}</Text>
        <TextInput
            maxLength={20}
            onChangeText={(e:string)=>handlePassword(e)}
            onFocus={()=>handleFocus(true)}
            onBlur={()=>handleFocus(false)}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#B7B7B7"
            secureTextEntry={hidePassword}
        />
        <View style={styles.icon}>
            <FontAwesomeIcon color="#B7B7B7" icon={faLock} size={23}/>
        </View>
        <TouchableOpacity onPress={()=>setHidePassword(!hidePassword)} style={styles.eye}>
            <FontAwesomeIcon color="#B7B7B7" size={20} icon={hidePassword  ? faEyeSlash  : faEye} />
        </TouchableOpacity>
    </View>
    );
}

const getStyle = (theme:string,focus:boolean) =>
    StyleSheet.create({
    mobileContainer : {
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        borderColor:focus ? '#007236' : theme === 'dark' ? '#777' : '#ddd',
        backgroundColor: theme === 'dark' ? '#121212' : 'white',
    },
    input : {
        paddingTop:35,
        paddingBottom:11,
        paddingHorizontal:50,
        color : theme === 'dark' ? 'white' : 'black',

    },
    mobile : {
        paddingTop:11,
        paddingStart:50,
        position:'absolute',
        color:'#007236',
        fontWeight:'bold',
    },
    eye : {
        position:'absolute',
        bottom:16,
        right:20,
    },
    icon : {
        position:'absolute',
        left:15,
        top:25,
    },
});
