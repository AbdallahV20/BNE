/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View,ImageBackground,StyleSheet,Image,Text } from 'react-native';
import FingerPrint from '../atoms/FingerPrint';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackProps } from '../pages/Home/Home';
export default function BalanceCard() : React.JSX.Element {
    const navigation = useNavigation<NativeStackNavigationProp<HomeStackProps>>();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('CreditCards')}>
            <ImageBackground style={{padding:15,borderRadius:20,overflow:'hidden',rowGap:20}} source={require('../../images/green.png')}>
                <View style={{...StyleSheet.absoluteFillObject}}>
                    <Image   style={{width:'100%',height:'100%',opacity:0.6}} source={require('../../images/greenoverlay.png')} resizeMode="cover" />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:16}}>Balance</Text>
                    <FingerPrint size={18} padding={7}/>
                </View>
                <Text style={{marginTop:10,marginBottom:30,color:'white',fontWeight:'bold',fontSize:25,textAlign:'center'}}>$10,374,654.25</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
}
