import { ScrollView,StyleSheet,View } from 'react-native';
import React from 'react';
import CreditCard from '../molecules/CreditCard';
export default function CreditCardsContainer() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.cardContainer}>
                    <CreditCard
                    money="$135,000"
                    code="**** **** **** 2001"
                    CVV="277"
                    background={require('../../images/recred.png')}
                    />
                </View>
                <View style={styles.cardContainer}>
                    <CreditCard
                    money="$147,000"
                    code="**** **** **** 7000"
                    CVV="141"
                    background={require('../../images/reccardgreen.png')}
                    />
                </View>
                <View style={styles.cardContainer}>
                    <CreditCard
                    money="$300,000,000"
                    code="**** **** **** 7543"
                    CVV="300"
                    background={require('../../images/recred.png')}
                    />
                </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    cardContainer : {
        marginRight:17,
    },
});
