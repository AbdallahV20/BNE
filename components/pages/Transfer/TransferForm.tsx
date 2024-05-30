/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Picker from '../../atoms/Picker';
import CustomInput from '../../atoms/CustomInput';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../atoms/CustomButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TransferStackProps } from './Transfer';
import { ThemeContext } from '../../../App';

const TransferForm: React.FC = () => {
    const navigation = useNavigation<NavigationProp<TransferStackProps>>();
    const [formFilled, setFormFilled] = useState(false);
    const {theme} = useContext(ThemeContext);
    // State variables for form inputs
    const [transferType, setTransferType] = useState<string>('');
    const [transferFrom, setTransferFrom] = useState<string>('');
    const [transferTo, setTransferTo] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [result,setResulat] = useState<string>('');
    useLayoutEffect(() => {
        if (transferType && transferTo && transferFrom && amount) {
            setFormFilled(true);
        } else {
            setFormFilled(false);
        }
    }, [transferType, transferTo, transferFrom, amount]);

    function handlePress() {
        if(formFilled)
        {
            navigation.navigate('OtpTransfer');
            setTransferType('');
            setTransferFrom('');
            setTransferTo('');
            setAmount('');
            setResulat('');
            setFormFilled(false);
        }
    }
    return (
        <View style={[styles.container,{backgroundColor:theme === 'dark' ? '#121212' : '#f1f3fb'}]}>
            <Text style={[styles.title,{color:theme === 'dark' ? '#b7b7b7' : 'black'}]}>Transfer</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Picker value={transferType} handleChange={(value) => setTransferType(value)} title="Type of transfer" choice1="Between your accounts" choice2="To another account" />
                <Picker value={transferFrom} handleChange={(value) => setTransferFrom(value)} title="Transfer from" choice1="042-653214521245 - $2,145,5874.25" choice2="056-32154875423 - $1,523.48" />
                <Picker value={transferTo} handleChange={(value) => setTransferTo(value)} title="Transfer to" choice1="056-32154875423 - $1,523.48" choice2="042-653214521245 - $2,145,5874.25" />
                <CustomInput value={amount} handleChange={(value) => setAmount(value)} type="numeric" label="Amount to transfer" title="Amount" />
                <CustomInput value={result} handleChange={(value) => setResulat(value)} label="Reason to transfer" title="Optional" />
                <View style={styles.btn}>
                    <CustomButton color={formFilled ? '#007236' : '#aaa'} title="Transfer" pressFunction={handlePress} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 17,
        flex: 1,
    },
    title: {
        marginBottom: 15,
        fontWeight: 'bold',
        fontSize: 20,
    },
    btn: {
        marginBottom: 5,
    },
});

export default TransferForm;
