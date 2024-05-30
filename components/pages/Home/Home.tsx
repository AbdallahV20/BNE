import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Balance from './Balance';
import CredirCards from './CredirCards';

export type HomeStackProps = {
    Balance : undefined,
    CreditCards : undefined
}

export default function Home() : React.JSX.Element {
    const Stack = createNativeStackNavigator<HomeStackProps>();
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
            <Stack.Screen name="Balance" component={Balance} />
            <Stack.Screen name="CreditCards" component={CredirCards} />
        </Stack.Navigator>
    );
}

