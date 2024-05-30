/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet } from 'react-native';
import { View,Text } from 'react-native';
import Profile from '../../atoms/Profile';
import { FlatList } from 'react-native-gesture-handler';
import EmptyList from '../../molecules/EmptyList';
import { RouteProp } from '@react-navigation/native';
import { BeneficiariesStackProps } from './Beneficiaries';
import { useContext } from 'react';
import { ThemeContext } from '../../../App';
import History from '../../atoms/History';

type typeProps = {
    route : RouteProp<BeneficiariesStackProps,'BeneficiariesHistory'>,
}

export default function BeneficiariesHistory({route}:typeProps): React.JSX.Element {
    const data : {
        id:number,
        type:string,
        date:string,
        money:string,
    }[] = [
        {
            id:1,
            type:'College Expenses',
            date:'12-02-2021',
            money:'$563,62.0',
        },
        {
            id:2,
            type:'New Laptop',
            date:'08-04-2021',
            money:'$647,67.0',
        },
        {
            id:3,
            type:'Car Loan',
            date:'12-02-2021',
            money:'$563,62.0',
        },
        {
            id:4,
            type:'College Expenses',
            date:'10-02-2021',
            money:'$755,45.0',
        },
        {
            id:5,
            type:'College Expenses',
            date:'12-02-2021',
            money:'$563,62.0',
        },
        {
            id:6,
            type:'College Expenses',
            date:'12-02-2021',
            money:'$563,62.0',
        },
        {
            id:7,
            type:'College Expenses',
            date:'12-02-2021',
            money:'$563,62.0',
        },
        {
            id:8,
            type:'College Expenses',
            date:'12-02-2021',
            money:'$563,62.0',
        },
    ];
    const {theme} = useContext(ThemeContext);
    const emptyList = ()=><EmptyList  img={require('../../../images/history.png')} title="No History" subTitle="Not a single transaction was made to this account"/>;
    return (
        <View style={[styles.container,{backgroundColor:theme === 'dark' ? '#121212' : '#f1f3fb'}]}>
            <Profile img={route.params?.img} name={route.params?.name} phone={route.params?.phone} money={route.params?.money} isItem={true} />
            <Text style={[styles.title,{color : theme === 'dark' ? 'white' : 'black'}]}>Transaction History</Text>
            <FlatList
            data={data}
            renderItem={({item})=><History name={item.type} date={item.date} money={item.money} length={data.length} id={item.id} />}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={emptyList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingHorizontal:17,
        flex:1,
    },
    title: {
        fontWeight:'bold',
        fontSize:20,
        marginTop:10,
    },

});
