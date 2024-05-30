import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useContext } from 'react';
import {View,TextInput,Text, StyleSheet} from 'react-native';
import { ThemeContext } from '../../App';

type Props = {
    focus : boolean;
    handleChangeText : (e:string)=> void;
    handleFocus : ()=> void;
    handleBlur : ()=> void;
}

export default function MobileInput({focus,handleChangeText,handleFocus,handleBlur} : Props) : React.JSX.Element {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme,focus);
  return (
        <View style={styles.mobileContainer}>
          <Text style={styles.mobile}>Mobile Number</Text>
          <TextInput
            onChangeText={handleChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            keyboardType="numeric"
            style={styles.input}
            placeholder="Ex : +2016761967"
            placeholderTextColor="#B7B7B7"
          />
          <View style={styles.icon}>
            <FontAwesomeIcon color={theme === 'dark' ? 'white' : '#B7B7B7'} icon={faMobile} size={23} />
          </View>
      </View>
    );
}


const getStyles = (theme:string,focus:boolean) =>
StyleSheet.create({
  mobileContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: focus ? '#007236' : theme === 'dark' ? '#777' :  '#ddd',
    backgroundColor: theme === 'dark' ? '#121212' : 'white',
  },
  input: {
    paddingTop: 35,
    paddingBottom: 11,
    paddingStart: 50,
    color : theme === 'dark' ? 'white' : 'black',
  },
  mobile: {
    paddingTop: 11,
    paddingStart: 50,
    position: 'absolute',
    color: '#007236',
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    left: 15,
    top: 25,
  },
});
