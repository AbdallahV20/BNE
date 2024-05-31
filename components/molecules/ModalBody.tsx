import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ThemeContext } from '../../App';

const ModalBody: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyle(theme);
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/transfer.png')} />
      <Text style={styles.title}>Mission Complete</Text>
      <Text style={styles.subtitle}>Transfer to Akhnaton was successful</Text>
    </View>
  );
};

const getStyle = (theme:string) =>
    StyleSheet.create({
        container: {
            alignItems: 'center',
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 5,
            color: theme === 'dark' ? '#b7b7b7' : 'black',
        },
        subtitle: {
            marginTop: 5,
            color: '#b7b7b7',
        },
    });

export default ModalBody;
