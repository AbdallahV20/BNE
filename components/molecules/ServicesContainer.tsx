import React from 'react';
import { StyleSheet, View } from 'react-native';
import { faMoneyBill1,faCreditCard} from '@fortawesome/free-regular-svg-icons';
import { faFaucetDrip,faFileLines} from '@fortawesome/free-solid-svg-icons';
import Service from '../atoms/Service';
export default function ServicesContainer() {
    return (
        <View style={styles.container}>
            <Service icon={faMoneyBill1} title={'Accounts'} iconColor={'#00C974'} iconBackground={'#00C97426'}/>
            <Service icon={faCreditCard} title={'Cards'} iconColor={'#00ADF8'} iconBackground={'#00ADF826'}/>
            <Service icon={faFaucetDrip} title={'Utilities'} iconColor={'#F6A721'} iconBackground={'#F6A72126'}/>
            <Service icon={faFileLines} title={'History'} iconColor={'#FF002E'} iconBackground={'#FF002E26'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        marginVertical:25,
        flexDirection:'row',
        justifyContent:'space-between',
    },
});
