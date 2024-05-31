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
            <ImageBackground style={styles.container} source={require('../../assets/images/green.png')}>
                <View style={styles.imgContainer}>
                    <Image   style={styles.img} source={require('../../assets/images/greenoverlay.png')} resizeMode="cover" />
                </View>
                <View style={styles.header}>
                    <Text style={styles.text}>Balance</Text>
                    <FingerPrint size={18} padding={7}/>
                </View>
                <Text style={styles.money}>$10,374,654.25</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container : {
    padding:15,
    borderRadius:20,
    overflow:'hidden',
    rowGap:20,
  },
  imgContainer : {
    ...StyleSheet.absoluteFillObject,
  },
  img :{
    width:'100%',
    height:'100%',
    opacity:0.6,
  },
  header : {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  text : {
    color:'white',
    fontSize:16,
  },
  money : {
    marginTop:10,
    marginBottom:30,
    color:'white',
    fontWeight:'bold',
    fontSize:25,
    textAlign:'center',
  },
});
