import React, { createContext, useState, useEffect } from 'react';
import { StatusBar, I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import DrawerMain from './components/pages/DrawerMain';
import Splasher from './components/pages/Splasher/Splasher';
import Auth from './components/pages/Auth/Auth';
import RNRestart from 'react-native-restart';

type contextProps = {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>,
}

export type RootStackParamList = {
  Splasher: undefined;
  Auth: undefined;
  DrawerMain: undefined;
};

export const ThemeContext = createContext<contextProps>({
  theme: '',
  setTheme: () => {},
});

const Stack = createNativeStackNavigator<RootStackParamList>();
const App: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  useEffect(() => {
    // Force LTR layout direction
    if (I18nManager.isRTL) {
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);
      RNRestart.Restart(); // Restart the app to apply changes immediately
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavigationContainer>
        <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor="transparent" translucent />
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Splasher" component={Splasher} />
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="DrawerMain" component={DrawerMain} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;
