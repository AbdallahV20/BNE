import { StyleSheet, Text,View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
export default function SettingComponent({icon,text}:any) {
  const {theme} = useContext(ThemeContext);
  const styles = getStyle(theme);
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <FontAwesomeIcon icon={icon} size={18}  color="black" />
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
}


const getStyle = (theme:string) =>
  StyleSheet.create({
    container : {
      flexDirection:'row',
      marginBottom:15,
      alignItems:'center',
    },
    icon : {
      backgroundColor:'#c6c7ce',
      padding:8,
      borderRadius:13,
    },
    text: {
      fontWeight:'bold',
      color:theme === 'dark' ? '#b7b7b7' : 'black',
      marginLeft:10,
      fontSize:18,
    },
  });
