import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { View,Text, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type InputProps = {
    value:string,
    label : string,
    icon : IconDefinition,
    handleChange:(v:string)=> void,
    password?:boolean,
    showPass?: boolean,
    handleShowPass? : ()=>void,
}
export default function LoginInput({value,label,icon,handleChange,password,showPass,handleShowPass}:InputProps) : React.JSX.Element {
    return (
        <View style={styles.inputContainer}>
            <FontAwesomeIcon style={styles.leftIcon} size={21} icon={icon} />
            <Text style={styles.label}>{label}</Text>
            <TextInput onChangeText={handleChange} value={value} style={styles.input} secureTextEntry={password ? showPass ? false : true : false} maxLength={15}/>
            {password &&
            <TouchableOpacity  onPress={handleShowPass} style={styles.eyeIcon}>
              <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} size={22} color="#fff"  />
            </TouchableOpacity>}
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 20,
      },
      leftIcon:{
        color:'white',
        position:'absolute',
        transform:[{translateY:29}],
        marginStart:24,
      },
      label : {
        fontWeight:'bold',
        color:'#fff',
        position:'absolute',
        transform:[{translateY:11},{translateX:65}],
      },
      input : {
        borderWidth:2,
        borderRadius:10,
        paddingStart:65,
        paddingTop:35,
        paddingEnd:50,
        paddingBottom:15,
        color:'white',
        borderColor : 'white',
      },
      eyeIcon : {
        position:'absolute',
        bottom:12,
        right:11,
        zIndex:1,
        padding:7,
      },
});
