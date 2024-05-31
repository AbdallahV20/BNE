import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CreditCard from '../molecules/CreditCard';

export default function CreditCardsContainer() {
    // Define an array of objects with credit card data
    const creditCards = [
        {
            id: 1,
            money: '$135,000',
            code: '**** **** **** 2001',
            CVV: '277',
            background: require('../../assets/images/recred.png'),
        },
        {
            id: 2,
            money: '$147,000',
            code: '**** **** **** 7000',
            CVV: '141',
            background: require('../../assets/images/reccardgreen.png'),
        },
        {
            id: 3,
            money: '$300,000,000',
            code: '**** **** **** 7543',
            CVV: '300',
            background: require('../../assets/images/recred.png'),
        },
    ];

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Map through the creditCards array */}
            {creditCards.map(card => (
                <View style={styles.cardContainer} key={card.id}>
                    <CreditCard
                        money={card.money}
                        code={card.code}
                        CVV={card.CVV}
                        background={card.background}
                    />
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginRight: 17,
    },
});
