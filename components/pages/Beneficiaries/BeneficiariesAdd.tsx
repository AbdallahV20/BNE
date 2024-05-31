import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useContext, useState, useLayoutEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import CustomInput from '../../atoms/CustomInput';
import Picker from '../../atoms/Picker';
import CustomButton from '../../atoms/CustomButton';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ThemeContext } from '../../../App';
import { DataContext } from './Beneficiaries';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BeneficiariesStackProps } from './Beneficiaries';

export default function BeneficiariesAdd(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<BeneficiariesStackProps>>();
  const { setData } = useContext(DataContext);
  const { theme } = useContext(ThemeContext);
  const styles = getStyle(theme);
  const [imageUri, setImageUri] = useState<string>();
  const [formFilled, setFormFilled] = useState(false);
  const [name, setName] = useState<string>('');
  const [name2, setName2] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [bank, setBank] = useState<string>('');
  const [money, setMoney] = useState<string>('');
  const [account, setAccount] = useState<string>('');

  useLayoutEffect(() => {
    if (bank && account && name && name2 && phone && email && imageUri) {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  }, [bank, account, name, name2, phone, email, imageUri]);

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

  function handleAdd() {
    setData(prevData => [
      ...(prevData || []),
      {
        id: prevData.length ? prevData[prevData.length - 1].id + 1 : 1,
        name: `${name} ${name2}`,
        img: { uri: imageUri },
        money: money,
        phone: phone,
      },
    ]);
    navigation.navigate('BeneficiariesMain');
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.iconContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <FontAwesomeIcon color={theme === 'dark' ? 'white' : '#007236'} icon={faCamera} size={50} />
        )}
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
            <CustomInput label="First Name" title="Ex:Akhnaton" handleChange={(value) => setName(value)} />
        </View>
        <View style={styles.input}>
            <CustomInput label="Last Name" title="Ex:Ahmed" handleChange={(value) => setName2(value)} />
        </View>
      </View>
      <Picker title="Bank branch" choice1="043 - Water Way Mall" choice2="140 - Ain Shams" handleChange={(value) => setBank(value)} />
      <CustomInput label="Account number" title="Ex:EG15000300425453463" handleChange={(value) => setAccount(value)} />
      <CustomInput label="Account Money" type="numeric" title="Ex:240000" handleChange={(value) => setMoney(value)} />
      <CustomInput label="Phone Number" type="numeric" title="Ex:+20 1611761967" handleChange={(value) => setPhone(value)} />
      <CustomInput label="Email" type="email-address" title="Ex:aa@ejada.com" handleChange={(value) => setEmail(value)} />
      <View style={styles.buttonContainer}>
        <CustomButton pressFunction={handleAdd} color={formFilled ? '#007236' : '#aaa'} title="Add Beneficiary" />
      </View>
    </ScrollView>
  );
}

const getStyle = (theme:string) =>
StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    flex: 1,
    backgroundColor: theme === 'dark' ? '#121212' : '#f1f3fb',
  },
  iconContainer: {
    borderRadius: 30,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: 20,
    backgroundColor: theme === 'dark' ? '#383838' : 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  input : {
    width : '48%',
  },
  buttonContainer: {
    marginBottom: 10,
  },
});
