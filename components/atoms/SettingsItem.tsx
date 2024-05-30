/* eslint-disable react-native/no-inline-styles */
import { Text,View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
export default function SettingComponent({icon,text}:any) {
  const {theme} = useContext(ThemeContext);
    return (
      <View style={{flexDirection:'row',marginBottom:15,alignItems:'center'}}>
        <View style={{backgroundColor:'#c6c7ce',padding:8,borderRadius:13}}>
          <FontAwesomeIcon icon={icon} size={18}  color="black" />
        </View>
        <Text style={{fontWeight:'bold',color:theme === 'dark' ? '#b7b7b7' : 'black',marginLeft:10,fontSize:18}}>{text}</Text>
      </View>
    );
}
