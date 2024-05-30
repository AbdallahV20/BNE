import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';


type Props = {
    size:number,
    padding:number,
}
export default function FingerPrint({size,padding}:Props) {
    return (
    <View style={[styles.fingerPrint,{padding:padding}]}>
        <FontAwesomeIcon color="#F6A721" size={size} icon={faFingerprint} />
    </View>
    );
}


const styles = StyleSheet.create({
    fingerPrint : {
        borderWidth:1,
        borderColor:'#F6A721',
        borderRadius:10,
        padding : 12,
      },
});
