import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import CustomIcon from '../atoms/CustomIcon';

type Props = {
    handlePress : ()=> void
}

export default function LogOut({handlePress}:Props) : React.JSX.Element {
    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <CustomIcon icon={faRightFromBracket} background="#E1072133" iconColor="#EB001B" />
            <Text style={styles.logout}>Log Out</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container : {
        marginBottom:20,
        alignSelf:'flex-start',
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
    },
    logout : {
        fontWeight:'bold',
        color:'#EB001B',
        fontSize:18,
        marginStart:10,
    },
});
