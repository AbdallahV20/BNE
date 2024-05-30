/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Data from '../atoms/Data';
import { TouchableOpacity,View,ImageBackground,Text,StyleSheet,Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeStackProps } from '../pages/Home/Home';
export default function CreditCard({background,money,code,CVV}:any) {
    const navigation = useNavigation<NavigationProp<HomeStackProps>>();
     return (
    <TouchableOpacity onPress={()=>navigation.navigate('Balance')}>
        <ImageBackground style={{borderRadius:20,overflow:'hidden',paddingHorizontal:30,paddingVertical:20,rowGap:25}} source={require('../../images/reccard.png')}>
            <View style={{...StyleSheet.absoluteFillObject}}>
                <Image style={{width:'100%',height:'100%',opacity:0.2}} source={background} />
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:29,color:'white',fontFamily:'GemunuLibre-Bold'}}>{money}</Text>
                <Image style={{alignSelf:'flex-start'}} source={require('../../images/visa.png')} />
            </View>

            <View style={{flexDirection:'row',columnGap:25,alignItems:'center'}}>
                <Text style={{color:'white',fontSize:29,fontFamily:'GemunuLibre-Regular'}}>{code}</Text>
                <View style={{flexDirection:'row',columnGap:5,alignItems:'center'}}>
                    <Image source={require('../../images/rec.png')} />
                    <Image source={require('../../images/recs.png')} />
                </View>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Data title="CARD HOLDER" data="QUEEN NEFERTITI" />
                <Data title="EXPIRES" data="08/25" />
                <Data title="CVV" data={CVV} />
            </View>
        </ ImageBackground>
    </TouchableOpacity>
     );
}
