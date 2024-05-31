import { StyleSheet } from 'react-native';
import { View,Text } from 'react-native';
import Profile from '../../atoms/Profile';
import { FlatList } from 'react-native-gesture-handler';
import EmptyList from '../../molecules/EmptyList';
import { RouteProp } from '@react-navigation/native';
import { BeneficiariesStackProps } from './Beneficiaries';
import { useContext } from 'react';
import { ThemeContext } from '../../../App';
import React from 'react';
import History from '../../atoms/History';

type typeProps = {
    route : RouteProp<BeneficiariesStackProps,'BeneficiariesHistory'>,
}
    const data : {
        id:number,
        type:string,
        date:string,
    }[] = [
        {
            id:1,
            type:'College Expenses',
            date:'12-02-2021',
        },
        {
            id:2,
            type:'New Laptop',
            date:'08-04-2021',
        },
        {
            id:3,
            type:'Car Loan',
            date:'12-02-2021',
        },
        {
            id:4,
            type:'College Expenses',
            date:'10-02-2021',
        },
        {
            id:5,
            type:'College Expenses',
            date:'12-02-2021',
        },
        {
            id:6,
            type:'College Expenses',
            date:'12-02-2021',
        },
        {
            id:7,
            type:'College Expenses',
            date:'12-02-2021',
        },
        {
            id:8,
            type:'College Expenses',
            date:'12-02-2021',
        },
    ];
export default function BeneficiariesHistory({route}:typeProps): React.JSX.Element {

    const {theme} = useContext(ThemeContext);
    const styles = getStyle(theme);
    const emptyList = ()=><EmptyList  img={require('../../../assets/images/history.png')} title="No History" subTitle="Not a single transaction was made to this account"/>;
    return (
        <View style={styles.container}>
            <Profile img={route.params?.img} name={route.params?.name} phone={route.params?.phone} money={route.params?.money} isItem={true} />
            <Text style={styles.title}>Transaction History</Text>
            <FlatList
            data={data}
            renderItem={({item})=><History name={item.type} date={item.date} length={data.length} id={item.id} />}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={emptyList}
            />
        </View>
    );
}

const getStyle = (theme:string) =>
    StyleSheet.create({
    container : {
        paddingHorizontal:17,
        flex:1,
        backgroundColor:theme === 'dark' ? '#121212' : '#f1f3fb',
    },
    title: {
        fontWeight:'bold',
        fontSize:20,
        marginTop:10,
        color : theme === 'dark' ? 'white' : 'black',
    },

});
