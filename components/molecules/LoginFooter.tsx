import { View,Text, StyleSheet } from 'react-native';
import React from 'react';
export default function LoginFooter() {
    return (
    <View style={styles.footer}>
        <Text style={styles.globalTextStyle}>
            <Text style={styles.normalStyle}> Contact Us </Text>
            -
            <Text style={styles.normalStyle}> FAQs </Text>
            -
            <Text style={styles.normalStyle}> Help </Text>
        </Text>
        <Text style={styles.copyright}>Copyright © NBE 2021 All Rights Reserved - National Bank of Egypt</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    footer : {
        marginBottom:20,
    },
    globalTextStyle : {
        color:'white',
        textAlign:'center',
    },
    normalStyle : {
        fontWeight:'bold',
        color:'#F6A721',
    },
    copyright : {
        color:'white',
        textAlign:'center',
        fontSize:10,
        marginTop:5,
    },
});
