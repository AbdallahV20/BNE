/* eslint-disable react-native/no-inline-styles */
import {Text, View,ScrollView,StyleSheet} from 'react-native';
import React, { useContext } from 'react';
import HistoryContainer from '../../molecules/HistoryContainer';
import CreditCardsContainer from '../../organisms/CreditCardsContainer';
import { ThemeContext } from '../../../App';
export default function CredirCards() : React.JSX.Element {
    const {theme} = useContext(ThemeContext);
    return (
        <ScrollView style={[styles.container,{backgroundColor : theme === 'dark' ? '#121212' : '#F1F3FB'}]}>
            <View style={styles.cards}>
                <CreditCardsContainer />
            </View>


            <View style={styles.sectionTitleContainer}>
            <Text style={{fontWeight:'bold',fontSize:20,color:theme === 'dark' ? '#b7b7b7' : '#000'}}>History</Text>
                <HistoryContainer />
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    sectionTitleContainer : {
        marginTop:30,
        paddingHorizontal:17,
    },
    cards  : {
        paddingStart:17,
    },
    title: {
        fontWeight:'bold',
        fontSize:20,
        color:'#000',
    },
});
