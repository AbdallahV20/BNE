import React from 'react';
import Data from '../atoms/Data';
import { TouchableOpacity, View, ImageBackground, Text, StyleSheet, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeStackProps } from '../pages/Home/Home';

export default function CreditCard({ background, money, code, CVV }: any) {
  const navigation = useNavigation<NavigationProp<HomeStackProps>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Balance')}>
      <ImageBackground style={styles.cardContainer} source={require('../../assets/images/reccard.png')}>
        <View style={styles.absoluteFill}>
          <Image style={styles.overlayImage} source={background} />
        </View>

        <View style={styles.topSection}>
          <Text style={styles.moneyText}>{money}</Text>
          <Image style={styles.visaImage} source={require('../../assets/images/visa.png')} />
        </View>

        <View style={styles.middleSection}>
          <Text style={styles.codeText}>{code}</Text>
          <View style={styles.recImages}>
            <Image source={require('../../assets/images/rec.png')} />
            <Image source={require('../../assets/images/recs.png')} />
          </View>
        </View>

        <View style={styles.bottomSection}>
          <Data title="CARD HOLDER" data="QUEEN NEFERTITI" />
          <Data title="EXPIRES" data="08/25" />
          <Data title="CVV" data={CVV} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 30,
    paddingVertical: 20,
    rowGap: 25,
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
  },
  overlayImage: {
    width: '100%',
    height: '100%',
    opacity: 0.2,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moneyText: {
    fontSize: 29,
    color: 'white',
    fontFamily: 'GemunuLibre-Bold',
  },
  visaImage: {
    alignSelf: 'flex-start',
  },
  middleSection: {
    flexDirection: 'row',
    columnGap: 25,
    alignItems: 'center',
  },
  codeText: {
    color: 'white',
    fontSize: 29,
    fontFamily: 'GemunuLibre-Regular',
  },
  recImages: {
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
