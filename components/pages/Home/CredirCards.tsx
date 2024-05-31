import {Text, View,ScrollView,StyleSheet} from 'react-native';
import React, { useContext } from 'react';
import HistoryContainer from '../../molecules/HistoryContainer';
import CreditCardsContainer from '../../organisms/CreditCardsContainer';
import { ThemeContext } from '../../../App';
export default function CredirCards() : React.JSX.Element {
    const {theme} = useContext(ThemeContext);
    const styles = getStyle(theme);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.cards}>
                <CreditCardsContainer />
            </View>


            <View style={styles.sectionTitleContainer}>
                <Text style={styles.history}>History</Text>
                <HistoryContainer />
            </View>
        </ScrollView>
    );
}


const getStyle = (theme:string) => StyleSheet.create({
    container: {
        flex:1,
        backgroundColor : theme === 'dark' ? '#121212' : '#F1F3FB',
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
    history : {
        fontWeight:'bold',
        fontSize:20,
        color:theme === 'dark' ? '#b7b7b7' : '#000',
    },
});
