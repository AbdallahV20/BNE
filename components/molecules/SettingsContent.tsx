import SettingComponent from '../atoms/SettingsItem';
import React, { useContext } from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import { faClipboardList, faCertificate, faMoneyBill, faCreditCard, faCashRegister, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../App';

export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <View style={styles.container}>
      <SettingComponent icon={faClipboardList} text={'Account Summary'} />
      <SettingComponent icon={faCertificate} text={'Open Certificates & Deposits'} />
      <SettingComponent icon={faMoneyBill} text={'Payment Services'} />
      <SettingComponent icon={faCreditCard} text={'Cards Services'} />
      <SettingComponent icon={faCashRegister} text={'Offers'} />

      <View style={styles.darkModeContainer}>
        <SettingComponent icon={faMoon} text={'Dark Mode'} />
        <Switch
          trackColor={{ false: '#767577', true: '#bbb' }}
          thumbColor={theme === 'dark' ? 'green' : '#f4f3f4'}
          style={styles.switch}
          value={theme === 'dark'}
          onValueChange={toggleTheme}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 33,
    rowGap: 5,
  },
  darkModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switch: {
    marginBottom: 8,
  },
});
