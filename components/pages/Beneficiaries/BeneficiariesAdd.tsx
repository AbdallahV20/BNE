
/* eslint-disable react-native/no-inline-styles */
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useContext, useState } from 'react';
import {View, StyleSheet, Alert, TouchableOpacity,Image} from 'react-native';
import CustomInput from '../../atoms/CustomInput';
import { ScrollView } from 'react-native-gesture-handler';
import Picker from '../../atoms/Picker';
import CustomButton from '../../atoms/CustomButton';
import { useLayoutEffect } from 'react';
import { ThemeContext } from '../../../App';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { DataContext } from './Beneficiaries';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BeneficiariesStackProps } from './Beneficiaries';

export default function BeneficiariesAdd() : React.JSX.Element {
    const navigation = useNavigation<NavigationProp<BeneficiariesStackProps>>();
    const [imageUri, setImageUri] = useState<string>();
    const {setData} = useContext(DataContext);
    const handlePress = () => {
        Alert.alert(
        'Select Option',
        'Choose an image source',
        [
            {
            text: 'Take Photo',
            onPress: () => {
                launchCamera(
                {
                    mediaType: 'photo',
                    cameraType: 'back',
                    saveToPhotos: true,
                },
                response => {
                    if (response.assets) {
                    setImageUri(response.assets[0].uri);
                    }
                }
                );
            },
            },
            {
            text: 'Choose from Library',
            onPress: () => {
                launchImageLibrary(
                {
                    mediaType: 'photo',
                },
                response => {
                    if (response.assets) {
                    setImageUri(response.assets[0].uri);
                    }
                }
                );
            },
            },
            {
            text: 'Cancel',
            style: 'cancel',
            },
        ],
        { cancelable: true }
        );
    };
    const [formFilled, setFormFilled] = useState(false);
    const [name,setName] = useState<string>('');
    const [name2,setName2] = useState<string>('');
    const [phone,setPhone] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [bank,setBank] = useState<string>('');
    const [money,setMoney] = useState<string>('');
    const [account,setAccount] = useState<string>('');
    useLayoutEffect(()=>{
        if(bank && account && name && name2 && phone && email && imageUri )
            {setFormFilled(true);}
        else
            {setFormFilled(false);}

    },[bank,account,name,name2,phone,email,imageUri]);
    const {theme} = useContext(ThemeContext);


    function handleAdd() {
        setData(prevData => [
            ...(prevData || []),
            {
                id: prevData.length ? prevData[prevData.length - 1].id + 1 : 1,
                name: name + ' ' + name2,
                img: { uri: imageUri },
                money: money,
                phone: phone,
            },
        ]);
        navigation.navigate('BeneficiariesMain');
    }
    return (
        <ScrollView style={[styles.container,{backgroundColor : theme === 'dark' ? '#121212' : '#f1f3fb'}]}>
            <TouchableOpacity onPress={handlePress} style={[styles.iconContainer,{backgroundColor : theme === 'dark' ? '#383838' : 'white'}]}>
            {imageUri ? (
          <Image source={{ uri: imageUri }} width={150} height={150}  />
        ) : (<FontAwesomeIcon color={theme === 'dark' ? 'white' : '#007236'} icon={faCamera} size={50} />)}
            </TouchableOpacity>
            <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{width:'48%'}}><CustomInput label="First Name" title="Ex:Akhnaton" handleChange={(value)=>setName(value)} /></View>
                <View style={{width:'48%'}}><CustomInput label="Last Name" title="Ex:Ahmed" handleChange={(value)=>setName2(value)} /></View>
            </View>
            <Picker title="Bank branch" choice1="043 - Water Way Mall" choice2="140 - Ain Shams" handleChange={(value)=>setBank(value)}/>
            <CustomInput label="Account number" title="Ex:EG15000300425453463" handleChange={(value)=>setAccount(value)} />
            <CustomInput label="Account Money" type="numeric" title="Ex:240000" handleChange={(value)=>setMoney(value)} />
            <CustomInput label="Phone Number" type="numeric" title="Ex:+20 1611761967" handleChange={(value)=>setPhone(value)} />
            <CustomInput label="Email" type="email-address" title="Ex:aa@ejada.com" handleChange={(value)=>setEmail(value)} />
            <View style={{marginBottom:10}}>
                <CustomButton pressFunction={handleAdd} color={`${formFilled ? '#007236' : '#aaa'}`} title="Add Beneficiariar"/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingHorizontal:17,
        flex:1,
    },
    iconContainer : {
        backgroundColor:'#fff',
        borderRadius:30,
        width:150,
        height:150,
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        overflow:'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
      },
});
