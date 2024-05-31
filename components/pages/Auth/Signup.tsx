import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import CustomButton from '../../atoms/CustomButton';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackParamList } from './Auth';
import MobileInput from '../../atoms/MobileInput';
import { ThemeContext } from '../../../App';

const Signup: React.FC = () => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyle(theme);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const isValidMobile = (number: string): boolean => {
    return /^(010|011|012|015)[0-9]{8}$/.test(number);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Mobile Number</Text>
        <Text style={styles.subTitle}>Enter the mobile number registered in the bank</Text>
        <MobileInput
          focus={focus}
          handleChangeText={(e) => setValue(e)}
          handleFocus={()=>setFocus(true)}
          handleBlur={()=>setFocus(false)}
          />
      </View>
      <View>
        <CustomButton
          title="Next"
          pressFunction={() =>isValidMobile(value) ? navigation.navigate('verification', { phone: value }) : undefined}
          color={isValidMobile(value) ? '#007236' : '#B7B7B7'}
        />
        <Text style={styles.terms}>
          By signing up, you agree to our Terms of Service and acknowledge that you have read our Privacy Policy.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const getStyle = (theme:string) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 17,
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor : theme === 'dark' ? '#121212' : '#f1f3fb',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      color : theme === 'dark' ? 'white' : 'black',
    },
    subTitle: {
      marginTop: 5,
      fontSize: 16,
      color:'#B7B7B7',
    },
    terms: {
      marginVertical: 25,
      textAlign: 'center',
      color:'#B7B7B7',
    },
});

export default Signup;
