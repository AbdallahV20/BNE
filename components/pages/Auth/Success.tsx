import {View,Text, StatusBar, StyleSheet,Image} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../atoms/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from './Auth';
export default function Success() : React.JSX.Element {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    return (
        <View style={styles.background}>
            <View style={styles.overlay} />

            <StatusBar barStyle={'light-content'} />
            <Image style={styles.logo} source={require('../../../images/logologin.png')}/>
            <Image style={styles.img} source={require('../../../images/succ.png')} />
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>Congratulations</Text>
                    <Text style={styles.subTitle}>You have successfully registered in NBE online banking service</Text>
                </View>
                <View style={styles.button}>
                    <CustomButton title="Finish" color="black" pressFunction={()=>navigation.navigate('login')}/>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    background : {
        backgroundColor:'#007236',
        flex:1,
    },
    container : {
        flex:1,
        paddingHorizontal:17,
        marginTop:80,
        justifyContent:'space-between',
    },
    title : {
        fontWeight:'bold',
        fontSize:30,
        color:'white',
    },
    subTitle : {
        marginTop : 10,
        color:'white',
        fontSize:16,
    },
    logo : {
        position:'absolute',
        right:20,
        top:70,
    },
    img : {
        position:'absolute',
        bottom:0,
        left:0,
        zIndex:-1,
    },
    button : {
        marginBottom:20,
    },
});
