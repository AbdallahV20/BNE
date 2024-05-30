import { StyleSheet, View,Image } from 'react-native';
import CustomWhiteButton from '../atoms/CustomIcon';
import React from 'react';
export default function LoginHeader() : React.JSX.Element {
    return (
    <View style={styles.header}>
        <CustomWhiteButton text="AR"/>
        <Image  source={require('../../images/logologin.png')}/>
    </View>
    );
}

const styles = StyleSheet.create({
    header : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
});

