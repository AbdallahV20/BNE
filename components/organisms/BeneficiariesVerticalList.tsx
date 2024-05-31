import React, { useContext } from 'react';
import { FlatList,Pressable } from 'react-native';
import Profile from '../atoms/Profile';
import EmptyList from '../molecules/EmptyList';
import { useNavigation,ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DataContext } from '../pages/Beneficiaries/Beneficiaries';
export default function BenVerticalList() : React.JSX.Element {
    const {data} = useContext(DataContext);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const emptyList = ()=><EmptyList add={true} img={require('../../assets/images/emptyList.png')} title="No Beneficiaries" subTitle="You don’t have beneficiaries, add some so you can send money"/>;
    return (
        <FlatList
        data={data}
        renderItem={
            ({item})=>(
            <Pressable onPress={()=>(navigation.navigate(
                'BeneficiariesHistory',
                {
                    name:item.name,
                    img : item.img,
                    money : item.money,
                    phone:item.phone,
                }
            ))}>
                <Profile img={item.img} name={item.name} phone={item.phone} money={item.money} isItem={true} />
            </Pressable>
        )}
        keyExtractor={(item)=>item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={emptyList}
        />
    );
}

