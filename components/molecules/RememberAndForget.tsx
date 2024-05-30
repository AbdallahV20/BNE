import React from 'react';
import { Pressable,View,Text, StyleSheet } from 'react-native';
import RememberMe from '../atoms/RememberMe';

export default function RememberAndForget() {
    return (
        <View style={styles.rememberMeAndForget}>

        <RememberMe />

        <Pressable>
            <Text style={styles.forgetPassword}>Forget Password?</Text>
        </Pressable>
    </View>
    );
}

const styles = StyleSheet.create({
    forgetPassword : {
        color:'#fff',
    },
    rememberMeAndForget : {
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginVertical:20,
    },
});
