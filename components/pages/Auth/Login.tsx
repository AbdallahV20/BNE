import { View, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginForm from '../../organisms/LoginForm';
import LoginHeader from '../../molecules/LoginHeader';

export default function Login(): React.JSX.Element {
    return (
        <ImageBackground style={styles.container} source={require('../../../assets/images/background.jpg')}>
            <View style={styles.overlay} />

            <SafeAreaView style={styles.safeArea}>
                <LoginHeader />
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        paddingHorizontal: 17,
        paddingTop: 16,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    formContainer: {
        marginTop: 30,
        flex:1,
    },
});
