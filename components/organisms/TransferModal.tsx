import React, { useContext } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import CustomButton from '../atoms/CustomButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TransferStackProps } from '../pages/Transfer/Transfer';
import ModalBody from '../molecules/ModalBody';
import { ThemeContext } from '../../App';

export default function TransferModal({ visible, setVisible }: any) {
  const navigation = useNavigation<NavigationProp<TransferStackProps>>();
  const { theme } = useContext(ThemeContext);
  const styles = getStyle(theme);
  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      animationType="slide"
      transparent
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ModalBody />
          <View style={styles.buttonContainer}>
            <CustomButton
              color="#007236"
              title="Finish"
              pressFunction={() => {
                setVisible(false);
                navigation.navigate('TransferForm');
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const getStyle = (theme:string) =>
    StyleSheet.create({
        modalContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'rgba(10,10,10,0.9)',
        },
        modalContent: {
            padding: 20,
            justifyContent: 'space-between',
            width: 300,
            height: 340,
            borderRadius: 30,
            backgroundColor: theme === 'dark' ? '#121212' : 'white',
        },
        buttonContainer: {
            marginTop: 20,
        },
    });
