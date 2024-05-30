import React, { useContext } from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Image, StatusBar, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Login from './Login';
import Signup from './Signup';
import Verification from './Verification';
import SetPassword from './SetPassword';
import Success from './Success';
import BackIcon from '../../atoms/BackIcon';
import { ThemeContext } from '../../../App';

export type AuthStackParamList = {
  login: undefined;
  signup: undefined;
  verification: { phone: string };
  SetPassword: undefined;
  Success: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const Auth: React.FC = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const {theme} = useContext(ThemeContext);
  const iconBack = () => <BackIcon handlePress={()=>navigation.goBack()} />;

  const logo = () => <Image style={styles.logo} source={require('../../../images/logo.png')} />;

  const screenOptions: NativeStackNavigationOptions = {
    headerLeft:iconBack,
    headerRight: logo,
    title: '',
    headerStyle: {
      backgroundColor: theme === 'dark'  ? '#121212' : '#f1f3fb',
    },
    headerShadowVisible: false,
  };

  return (
    <>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor="transparent" translucent />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen options={{ headerShown: false }} name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="verification" component={Verification} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen options={{ headerShown: false }} name="Success" component={Success} />
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 5,
  },
});

export default Auth;
