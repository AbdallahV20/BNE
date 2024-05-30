/* eslint-disable react-native/no-inline-styles */
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { Pressable,StyleSheet,Text } from 'react-native';
import { BeneficiariesStackProps } from '../pages/Beneficiaries/Beneficiaries';
import { ThemeContext } from '../../App';
export default function AddButton() {
    const navigation = useNavigation<NativeStackNavigationProp<BeneficiariesStackProps>>();
    const {theme} = useContext(ThemeContext);
    return (
        <Pressable style={[styles.buttonContainer,{backgroundColor : theme === 'dark' ? '#383838' : 'white'}]} onPress={()=>navigation.navigate('BeneficiariesAdd')}>
            <FontAwesomeIcon color="#007236" icon={faCirclePlus} />
            <Text style={{color : theme === 'dark' ? 'white' : 'black'}}>Add</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonContainer : {
        borderRadius:20,
        padding:5,
        flexDirection:'row',
        columnGap:5,
        alignItems:'center',
        height:35,
        paddingHorizontal:10,
    },
});
