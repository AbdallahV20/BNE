import { StyleSheet, View } from 'react-native';
import React from 'react';
import SettingsContent from '../molecules/SettingsContent';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import SettingsHeader from '../molecules/SettingsHeader';
import SettingsFooter from '../molecules/SettingsFooter';
import LogOut from '../molecules/LogOut';
export default function SettingsContainer() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
            <View>
                <SettingsHeader />
                <SettingsContent />
            </View>

            <View>
                <LogOut handlePress={()=>navigation.navigate('Auth')}/>
                <SettingsFooter />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'space-between',
    },
});



