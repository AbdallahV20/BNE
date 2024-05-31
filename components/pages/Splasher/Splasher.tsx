import { View, Image, StyleSheet } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, ThemeContext } from '../../../App';


export default function Splasher(): React.JSX.Element {
    const {theme} = useContext(ThemeContext);
    const styles = getStyle(theme);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    useLayoutEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Auth');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={[styles.container]}>
            <View style={styles.centered}>
                <Image source={require('../../../assets/images/minilogo.png')} />
            </View>
            <View style={styles.bottomCentered}>
                <Image source={require('../../../assets/images/minilogo2.png')} />
            </View>
        </View>
    );
}

const getStyle = (theme:string) =>
    StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor : theme === 'dark' ? '#121212' : '#f1f3fb',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomCentered: {
        alignItems: 'center',
        marginBottom: 50,
    },
});
