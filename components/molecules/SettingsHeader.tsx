import CustomIcon from '../atoms/CustomIcon';
import Logo from '../atoms/Logo';
import {StyleSheet, View} from 'react-native';
import React from 'react';
export default function SettingsHeader() {
    return (
        <View style={styles.container}>
            <Logo />
            <CustomIcon text="AR" />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
});
