import { View, Image, StyleSheet } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, ThemeContext } from '../../../App';


export default function Splasher(): React.JSX.Element {
    const {theme} = useContext(ThemeContext);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    useLayoutEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Auth');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={[styles.container,theme === 'dark' ? styles.dark : styles.light]}>
            <View style={styles.centered}>
                <Image source={require('../../../images/minilogo.png')} />
            </View>
            <View style={styles.bottomCentered}>
                <Image source={require('../../../images/minilogo2.png')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    light : {
        backgroundColor:'#f1f3fb',
    },
    dark : {
        backgroundColor:'#121212',
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
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
