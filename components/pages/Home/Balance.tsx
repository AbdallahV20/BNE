/* eslint-disable react-native/no-inline-styles */
import { StyleSheet,View,Text} from 'react-native';
import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import ServicesContainer from '../../molecules/ServicesContainer';
import PersonContainer from '../../molecules/PersonContainer';
import HistoryContainer from '../../molecules/HistoryContainer';
import BalanceCard from '../../molecules/BalanceCard';
import { ThemeContext } from '../../../App';

export default function Balance() : React.JSX.Element {
    const {theme} = useContext(ThemeContext);
    return (
        <ScrollView style={[styles.container,{backgroundColor: theme === 'dark' ? '#121212' : '#f1f3fb' }]}>
            <BalanceCard />
            <ServicesContainer />

            <View>
                <View style={{marginBottom:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:20,color:theme === 'dark' ? '#b7b7b7' : '#000'}}>Send Money</Text>
                    <Text style={{color:theme === 'dark' ? '#b7b7b7' : '#000'}}>View All</Text>
                </View>

                <PersonContainer />
            </View>

            <View style={{marginTop:15}}>
                <View style={{marginBottom:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:20,color:theme === 'dark' ? '#b7b7b7' : '#000'}}>History</Text>
                    <Text style={{color:theme === 'dark' ? '#b7b7b7' : '#000'}}>View All</Text>
                </View>
                <HistoryContainer />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:17,
    },
});
