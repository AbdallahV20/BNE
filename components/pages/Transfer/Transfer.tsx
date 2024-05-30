import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransferForm from './TransferForm';
import OtpTransfer from './OtpTransfer';

export type TransferStackProps = {
  TransferForm : undefined,
  OtpTransfer : undefined,
}

const Transfer : React.FC = () => {
    const Stack = createNativeStackNavigator<TransferStackProps>();
  return (
    <Stack.Navigator screenOptions={
      {
        headerShown:false,
      }
    }>
        <Stack.Screen name="TransferForm" component={TransferForm} />
        <Stack.Screen name="OtpTransfer" component={OtpTransfer} />
    </Stack.Navigator>
  );
};

export default Transfer;
