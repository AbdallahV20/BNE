import {View,TouchableOpacity, StyleSheet } from 'react-native';
import Profile from '../atoms/Profile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
export default function SettingsFooter() : React.JSX.Element {
    return (
        <View>
            <Profile img={require('../../assets/images/profile.jpg')} name="Queen Nefertiti" phone="01611761967"/>
            <TouchableOpacity style={styles.elliIcon}>
                <FontAwesomeIcon icon={faEllipsisVertical} size={22} color="#000"/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    elliIcon : {
        position:'absolute',
        right:20,
        top:'50%',
        transform: [{ translateY: -11 }],
    },
});
